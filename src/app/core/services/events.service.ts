import { Injectable } from "@angular/core"
import { BehaviorSubject } from "rxjs"
import { EventModel } from "src/app/models/event.model"
import {
  basicEventsCollection,
  questEventsCollection,
  introEventsCollection,
  lightYearEvents,
} from "./events-collection"
import { GameService } from "./game.service"
import { UserService } from "./user-service"

@Injectable({
  providedIn: "root",
})
export class EventService {
  constructor(
    private _gameService: GameService,
    private _userService: UserService
  ) {}

  hasSeenIntro$: BehaviorSubject<boolean> = this._userService.hasSeenIntro$
  isTimeSuspended$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    true
  )
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

  injectQuest(): void {
    if (questEventsCollection.length > 1) {
      const questDistance = Math.floor(Math.random() * 10) + 1
      const questPair = questEventsCollection.splice(0, 2)
      const randomIndex = this.getRandomIndex(this.basicEvents)
      this.basicEvents.splice(randomIndex, 0, questPair[0])
      this.basicEvents.splice(randomIndex + questDistance, 0, questPair[1])
    }
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

      default:
        break
    }
  }

  lightYearReader(lightYear: number): void {
    switch (lightYear) {
      case 15:
        this.basicEvents.unshift(
          lightYearEvents.find((event) => event.quest === "EXTOSOPIA") ||
            ({} as EventModel)
        )
        break

      default:
        break
    }
  }
}
