import { Injectable } from "@angular/core"
import { BehaviorSubject } from "rxjs"
import { EventModel } from "src/app/models/event.model"
import { basicEvents } from "./events-collection"

@Injectable({
  providedIn: "root",
})
export class EventService {
  eventCounter: number = 0
  currentEvent$: BehaviorSubject<EventModel> = new BehaviorSubject<EventModel>(
    basicEvents[0]
  )
  eventPool: EventModel[] = []

  randomFillEventPool(): void {
    const randomEventIndex = Math.floor(Math.random() * basicEvents.length)
    const randomEvent: EventModel = basicEvents.splice(randomEventIndex, 1)[0]
    this.eventPool.push(randomEvent)
  }

  onNextEvent(): void {
    this.randomFillEventPool()
    setTimeout(() => {
      this.eventCounter++
      this.currentEvent$.next(this.eventPool.splice(0, 1)[0])
    }, 500)
  }
}
