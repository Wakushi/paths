import { Injectable } from "@angular/core"
import { BehaviorSubject } from "rxjs"
import { EventModel } from "src/app/models/event.model"
import { introEventsCollection } from "./event-collections/intro-event"
import {
  extosopiaEventsCollection,
  extosopiaIntroEvents,
  extosopiaRepairEvents,
} from "./event-collections/extosopia-events"
import { basicEventsCollection } from "./event-collections/basic-events"
import { lightYearEvents } from "./event-collections/light-year-events"
import { GameService } from "./game.service"
import { UserService } from "./user-service"
import { QuestService } from "./quest.service"
import { ItemService } from "./items.service"
import {
  checkArraysMatch,
  getRandomNumber,
  shuffleEventArray,
} from "../utils/utils"
import {
  asteroidSequence,
  skjoldAsteroidEvents,
  skjoldIntroEvents,
} from "./event-collections/skjold-events"

@Injectable({
  providedIn: "root",
})
export class EventService {
  constructor(
    private _gameService: GameService,
    private _userService: UserService,
    private _questService: QuestService,
    private _itemService: ItemService
  ) {}

  hasSeenIntro$: BehaviorSubject<boolean> = this._userService.hasSeenIntro$
  showSnackbar$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)
  snackbarMessage$: BehaviorSubject<string> = new BehaviorSubject<string>("")
  isTimeSuspended$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    true
  )
  currentEvent$: BehaviorSubject<EventModel> = new BehaviorSubject<EventModel>(
    {} as EventModel
  )
  basicEvents: EventModel[] = [...basicEventsCollection]
  eventDiscard: EventModel[] = []
  specialEvents: string[] = []
  eventCounter: number = 0

  // EVENTS MANAGEMENT METHODS

  onNextEvent(): void {
    if (!this.isTimeSuspended$.value) {
      this.eventCounter++
    }
    this._gameService.runLightYears$.next(this.eventCounter)
    this.lightYearReader(this.eventCounter)
    this.eventReader(this.currentEvent$.value)

    setTimeout(() => {
      const nextEvent = this.basicEvents.splice(0, 1)[0]
      this.eventDiscard.push(nextEvent)
      this.currentEvent$.next(nextEvent)
    }, 500)
  }

  // EVENTS POOL INITIALIZATION & CONTROL

  initializeEventArray(): void {
    this.basicEvents = [...basicEventsCollection]
    if (this._userService.checkInventory("GAUGE_RELIC")) {
      this.basicEvents = shuffleEventArray(
        this.basicEvents.concat(extosopiaEventsCollection)
      )
    }
    this.basicEvents = shuffleEventArray(this.basicEvents)
    if (!this.hasSeenIntro$.value) {
      this.basicEvents = [...introEventsCollection].concat(this.basicEvents)
    }
    if (this._userService.checkInventory("CARTOGRAPHER_MAP")) {
      this.injectFollowedEvent(skjoldAsteroidEvents)
    }
    // IF QUEST INCLUDES "REPAIRS_2" > INJECT SKJOLD
    
    this.currentEvent$.next(this.basicEvents[0])
    this.basicEvents.shift()
  }

  initializeNewGame(): void {
    this.resetEventCounter()
    this.isTimeSuspended$.next(true)
  }

  resetEventCounter(): void {
    this.eventCounter = 0
  }

  refillDiscardedEvents(): void {
    this.basicEvents = this.basicEvents.concat(this.eventDiscard)
    this.eventDiscard = []
  }

  injectFollowedEvent(collection: EventModel[]): void {
    const randomIndex = getRandomNumber(10)
    this.basicEvents.splice(randomIndex, 0, ...collection)
  }

  // injectSeparatedQuest(): void {
  //   if (questEventsCollection.length > 1) {
  //     const questDistance = getRandomNumber(10)
  //     const questPair = questEventsCollection.splice(0, 2)
  //     const randomIndex = getRandomIndex(this.basicEvents)
  //     this.basicEvents.splice(randomIndex, 0, questPair[0])
  //     this.basicEvents.splice(randomIndex + questDistance, 0, questPair[1])
  //   }
  // }

  onSpecialEvent(eventValue: string): void {
    this.specialEvents.push(eventValue)
  }

  // EVENT READER

  eventReader(event: EventModel): void {
    if (!event.quest) {
      return
    }
    switch (event.quest) {
      case "INTRO_END":
        this.isTimeSuspended$.next(false)
        this._userService.setHasSeenIntro()
        break
      case "EXTOSOPIA_RELIC":
        this._itemService.gaugeRelic$.next(true)
        this.openQuestSnackbar("Find the relic")
        this._userService.addItem("GAUGE_RELIC")
        this._questService.removeQuest("GAUGE_RELIC")
        break
      case "EXTOSOPIA_EVENTS":
        this.basicEvents = shuffleEventArray(
          this.basicEvents.concat(extosopiaEventsCollection)
        )
        this.injectFollowedEvent(extosopiaRepairEvents)
        break
      case "REPAIRS_1":
        this._itemService.cartographerMap$.next(true)
        this.openQuestSnackbar("Find clues about the lost planet")
        this._userService.addItem("CARTOGRAPHER_MAP")
        this._questService.removeQuest("REPAIRS_1")
        this.injectFollowedEvent(skjoldAsteroidEvents)
        break
      case "ASTEROID_FIRST":
        this.specialEvents = []
        break
      case "ASTEROID_LAST":
        if (checkArraysMatch(this.specialEvents, asteroidSequence)) {
          this.specialEvents = []
          this._itemService.cartographerMap$.next(false)
          this._userService.removeItem("CARTOGRAPHER_MAP")
          this.openQuestSnackbar("Survive an asteroid shield")
          this._questService.removeQuest("REPAIRS_2")
          this.basicEvents.unshift(skjoldIntroEvents[0])
          // INJECT SJKOLD CARDS
        } else {
          console.log("You failed")
          // Event : 'As you barely dodge your third asteroid, a huge piece of rock hurts the haul. You decide to make a turn..'
        }
        break
      default:
        break
    }
  }

  // LIGHT YEAR READER

  lightYearReader(lightYear: number): void {
    switch (lightYear) {
      case 15:
        if (
          !this._questService.isQuestDone("EXTOSOPIA") ||
          !this._userService.checkInventory("GAUGE_RELIC")
        ) {
          this.basicEvents.unshift(
            lightYearEvents.find((event) => event.quest === "EXTOSOPIA") ||
              ({} as EventModel)
          )
          this.openQuestSnackbar("Reach Extosopia-3")
          this._questService.removeQuest("EXTOSOPIA")
          this.injectFollowedEvent(extosopiaIntroEvents)
        }
        break

      default:
        break
    }
  }

  // SNACKBAR

  openQuestSnackbar(message: string): void {
    this.showSnackbar$.next(true)
    this.snackbarMessage$.next(message)
    setTimeout(() => {
      this.showSnackbar$.next(false)
      this.snackbarMessage$.next("")
    }, 3500)
  }
}
