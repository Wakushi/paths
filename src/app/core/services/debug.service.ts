import { Injectable } from "@angular/core"
import { UserService } from "./user-service"
import { EventService } from "./events.service"
import { EventModel } from "src/app/models/event.model"
import { basicEventsCollection } from "./events-collection"
import { extosopiaEventsCollection } from "./events-collection"

@Injectable({
  providedIn: "root",
})
export class DebugService {
  constructor(
    private _userService: UserService,
    private _eventService: EventService
  ) {}

  eventCollection: EventModel[] = basicEventsCollection

  checkGeneralData(): void {
    console.log("User Service : ")
    console.log("hasSeenIntro : ", this._userService.hasSeenIntro$.value)
    console.log("userInventory : ", this._userService.userInventory$.value)
    console.log("- - - - - - - - - -")
    console.log("Event Service : ")
    console.log("hasSeenIntro : ", this._eventService.hasSeenIntro$.value)
    console.log("isTimeSuspended : ", this._eventService.isTimeSuspended$.value)
  }

  checkDeckData(): void {
    console.log("Event counter: ")
    console.log(this._eventService.eventCounter)
    console.log("- - - - - - - - - -")
    console.log("Current event: ")
    console.log(this._eventService.currentEvent$.value)
    console.log("- - - - - - - - - -")
    console.log("Basic events : ")
    console.log(this._eventService.basicEvents)
    console.log("- - - - - - - - - -")
    console.log("Discarded events : ")
    console.log(this._eventService.eventDiscard)
    console.log("Exto events : ")
    console.log(extosopiaEventsCollection)
  }

  getEventsData(): void {
    const GaugeDatas: GaugeData = {
      time: { count: 0, values: {} },
      mental: { count: 0, values: {} },
      energy: { count: 0, values: {} },
      health: { count: 0, values: {} },
    }

    const keys = [
      "-25",
      "-20",
      "-15",
      "-10",
      "-5",
      "5",
      "10",
      "15",
      "20",
      "25",
      "30",
    ]

    for (let gauge in GaugeDatas) {
      keys.forEach(
        (key) => (GaugeDatas[gauge as keyof GaugeData].values[key] = 0)
      )
    }

    const allConsequences = this.eventCollection.flatMap((event) => [
      event.rightChoice.consequence,
      event.leftChoice.consequence,
    ])

    allConsequences.forEach((consequence) => {
      Object.entries(consequence).forEach(([gauge, value]) => {
        if (gauge in GaugeDatas) {
          GaugeDatas[gauge as keyof GaugeData].count++
          GaugeDatas[gauge as keyof GaugeData].values[value.toString()]++
        }
      })
    })

    for (let gauge in GaugeDatas) {
      console.log(
        `${gauge.charAt(0).toUpperCase() + gauge.slice(1)}: `,
        GaugeDatas[gauge as keyof GaugeData].values
      )
      console.log(
        `${gauge.charAt(0).toUpperCase() + gauge.slice(1)} Count: `,
        GaugeDatas[gauge as keyof GaugeData].count
      )
    }
  }
}

type GaugeData = {
  [key in "time" | "mental" | "energy" | "health"]: {
    count: number
    values: { [key: string]: number }
  }
}
