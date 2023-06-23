import { Component, OnInit } from "@angular/core"
import { Observable } from "rxjs"
import { EventService } from "src/app/core/services/events.service"
import { GameService } from "src/app/core/services/game.service"
import { GaugesService } from "src/app/core/services/gauges.service"

@Component({
  selector: "app-game-over",
  templateUrl: "./game-over.component.html",
  styleUrls: ["./game-over.component.scss"],
})
export class GameOverComponent implements OnInit {
  constructor(
    private _gameService: GameService,
    private _gaugeService: GaugesService,
    private _eventService: EventService
  ) {}

  deathMessage$!: Observable<string>
  runLightYears$!: Observable<number>

  ngOnInit(): void {
    this.deathMessage$ = this._gameService.deathMessage$
    this.runLightYears$ = this._gameService.runLightYears$
  }

  onTryAgain(): void {
    this._gameService.isGameOver$.next(false)
    this._gameService.isBackgroundMoving$.next(false)
    this._gameService.runLightYears$.next(0)
    this._eventService.eventCounter = 0
    this._gaugeService.resetGauges()
  }
}
