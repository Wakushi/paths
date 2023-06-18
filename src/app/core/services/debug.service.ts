import { Injectable } from "@angular/core"
import { UserService } from "./user-service"
import { EventService } from "./events.service"

@Injectable({
  providedIn: "root",
})
export class DebugService {
  constructor(
    private _userService: UserService,
    private _eventService: EventService
  ) {}
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
  }
}
