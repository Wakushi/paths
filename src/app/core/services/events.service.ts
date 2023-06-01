import { Injectable } from "@angular/core"
import { BehaviorSubject } from "rxjs"
import { EventModel } from "src/app/models/event.model"
import { basicEventsCollection } from "./events-collection"
import { questEventsCollection } from "./events-collection"
import { GameService } from "./game.service"

@Injectable({
  providedIn: "root",
})
export class EventService {
  constructor(private _gameService: GameService) {}

  eventCounter: number = 0
  basicEvents: EventModel[] = [...basicEventsCollection]
  eventDiscard: EventModel[] = []

  currentEvent$: BehaviorSubject<EventModel> = new BehaviorSubject<EventModel>(
    this.getRandomEvent(this.basicEvents)
  )

  getRandomIndex(array: EventModel[]): number {
    return Math.floor(Math.random() * array.length)
  }

  getRandomEvent(array: EventModel[]): EventModel {
    return array[this.getRandomIndex(array)]
  }

  initializeEventArray(): void {
    this.basicEvents = [...basicEventsCollection]
    this.basicEvents = this.shuffleEventArray(this.basicEvents)
  }

  shuffleEventArray(array: EventModel[]): EventModel[] {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[array[i], array[j]] = [array[j], array[i]]
    }
    return array
  }

  onNextEvent(): void {
    this.eventCounter++
    if (this.eventCounter === 5) {
      this.injectQuest()
    }
    this._gameService.runLightYears$.next(this.eventCounter)
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
}
