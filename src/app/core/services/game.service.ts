import { Injectable } from "@angular/core"
import { BehaviorSubject } from "rxjs"
import { backgroundCollection } from "src/assets/background-collection"

@Injectable({
  providedIn: "root",
})
export class GameService {
  isGameOver$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)
  deathMessage$: BehaviorSubject<string> = new BehaviorSubject<string>("")
  runLightYears$: BehaviorSubject<number> = new BehaviorSubject<number>(0)

  gameBackground$: BehaviorSubject<string> = new BehaviorSubject<string>(
    backgroundCollection["classicShip"]
  )
  isDeckVisible$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true)

  setGameBackground(backgroundContext: string): void {
    this.gameBackground$.next(backgroundCollection[backgroundContext])
  }

  setDeckVisible(visible: boolean): void {
    this.isDeckVisible$.next(visible)
  }
}
