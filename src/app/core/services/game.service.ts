import { Injectable } from "@angular/core"
import { BehaviorSubject } from "rxjs"

@Injectable({
  providedIn: "root",
})
export class GameService {
  isGameOver$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)
  deathMessage$: BehaviorSubject<string> = new BehaviorSubject<string>("")
  runLightYears$: BehaviorSubject<number> = new BehaviorSubject<number>(0)
}
