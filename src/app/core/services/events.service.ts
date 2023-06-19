import { Injectable } from "@angular/core"
import { BehaviorSubject } from "rxjs"
import { EventModel } from "src/app/models/event.model"
import {
  basicEventsCollection,
  questEventsCollection,
  introEventsCollection,
  lightYearEvents,
} from "./events-collection"
import {
  extosopiaEventsCollection,
  extosopiaIntroEvents,
} from "./event-collections/extosopia-events"
import { GameService } from "./game.service"
import { UserService } from "./user-service"
import { QuestService } from "./quest.service"
import { ItemService } from "./items.service"

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
  isTimeSuspended$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    true
  )
  showSnackbar$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)
  snackbarMessage$: BehaviorSubject<string> = new BehaviorSubject<string>("")
  eventCounter: number = 0
  basicEvents: EventModel[] = [...basicEventsCollection]
  eventDiscard: EventModel[] = []
  currentEvent$: BehaviorSubject<EventModel> = new BehaviorSubject<EventModel>(
    {} as EventModel
  )

  getRandomIndex(array: EventModel[]): number {
    return Math.floor(Math.random() * array.length)
  }

  getRandomEvent(array: EventModel[]): EventModel {
    return array[this.getRandomIndex(array)]
  }

  getRandomNumber(): number {
    return Math.floor(Math.random() * 10) + 1
  }

  resetEventCounter(): void {
    this.eventCounter = 0
  }

  shuffleEventArray(array: EventModel[]): EventModel[] {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[array[i], array[j]] = [array[j], array[i]]
    }
    return array
  }

  initializeEventArray(): void {
    this.basicEvents = [...basicEventsCollection]
    if (this._userService.checkInventory("GAUGE_RELIC")) {
      this.basicEvents = this.shuffleEventArray(
        this.basicEvents.concat(extosopiaEventsCollection)
      )
    }
    this.basicEvents = this.shuffleEventArray(this.basicEvents)
    if (!this.hasSeenIntro$.value) {
      this.basicEvents = [...introEventsCollection].concat(this.basicEvents)
    }
    this.currentEvent$.next(this.basicEvents[0])
    this.basicEvents.shift()
  }

  initializeNewGame(): void {
    this.resetEventCounter()
    this.isTimeSuspended$.next(true)
  }

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

  refillDiscardedEvents(): void {
    this.basicEvents = this.basicEvents.concat(this.eventDiscard)
    this.eventDiscard = []
  }

  injectSeparatedQuest(): void {
    if (questEventsCollection.length > 1) {
      const questDistance = this.getRandomNumber()
      const questPair = questEventsCollection.splice(0, 2)
      const randomIndex = this.getRandomIndex(this.basicEvents)
      this.basicEvents.splice(randomIndex, 0, questPair[0])
      this.basicEvents.splice(randomIndex + questDistance, 0, questPair[1])
    }
  }

  injectFollowedEvent(collection: EventModel[], amount: number): void {
    const randomIndex = this.getRandomNumber()
    this.basicEvents.splice(randomIndex, 0, ...collection)
  }

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
        this.basicEvents = this.shuffleEventArray(
          this.basicEvents.concat(extosopiaEventsCollection)
        )
        break
      default:
        break
    }
  }

  lightYearReader(lightYear: number): void {
    switch (lightYear) {
      case 15:
        if (!this._questService.isQuestDone("EXTOSOPIA")) {
          this.basicEvents.unshift(
            lightYearEvents.find((event) => event.quest === "EXTOSOPIA") ||
              ({} as EventModel)
          )
          this.openQuestSnackbar("Reach Extosopia-3")
          this._questService.removeQuest("EXTOSOPIA")
          this.injectFollowedEvent(extosopiaIntroEvents, 2)
        }
        break

      default:
        break
    }
  }

  openQuestSnackbar(message: string): void {
    this.showSnackbar$.next(true)
    this.snackbarMessage$.next(message)
    setTimeout(() => {
      this.showSnackbar$.next(false)
    }, 3500)
  }
}
