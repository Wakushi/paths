import { Injectable } from "@angular/core"
import { BehaviorSubject } from "rxjs"

@Injectable({
  providedIn: "root",
})
export class UserService {

  hasSeenIntro$: BehaviorSubject<boolean> = new BehaviorSubject(false)

  setHasSeenIntro(): void {
    localStorage.setItem("intro", "seen")
  }

  checkHasSeenIntro(): boolean {
    if (localStorage.getItem("intro") === "seen") {
      this.hasSeenIntro$.next(true)
      return true
    } else {
      return false
    }
  }
}
