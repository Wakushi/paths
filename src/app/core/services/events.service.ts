import { Injectable } from "@angular/core"
import { BehaviorSubject } from "rxjs"
import { EventModel } from "src/app/models/event.model"
import { basicEventsCollection } from "./events-collection"
import { GameService } from "./game.service"

@Injectable({
  providedIn: "root",
})
export class EventService {
  constructor(private _gameService: GameService) {}

  eventCounter: number = 0
  basicEvents: EventModel[] = [...basicEventsCollection]
  eventPool: EventModel[] = []
  eventDiscard: EventModel[] = []

  currentEvent$: BehaviorSubject<EventModel> = new BehaviorSubject<EventModel>(
    basicEventsCollection[this.getRandomIndex(this.basicEvents)]
  )

  getRandomIndex(array: EventModel[]): number {
    return Math.floor(Math.random() * array.length)
  }

  randomFillEventPool(): void {
    const randomEventIndex = Math.floor(Math.random() * this.basicEvents.length)
    const randomEvent: EventModel = this.basicEvents.splice(
      randomEventIndex,
      1
    )[0]
    this.eventPool.push(randomEvent)
    this.eventDiscard.push(randomEvent)
  }

  onNextEvent(): void {
    this.eventCounter++
    this._gameService.runLightYears$.next(this.eventCounter)
    this.randomFillEventPool()
    setTimeout(() => {
      this.currentEvent$.next(this.eventPool.splice(0, 1)[0])
    }, 500)
  }

  refillDiscardedEvents(): void {
    this.basicEvents = this.basicEvents.concat(this.eventDiscard)
    this.eventDiscard = []
  }

}
