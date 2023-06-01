import { Component, OnInit } from "@angular/core"
import { Observable } from "rxjs"
import { GameService } from "src/app/core/services/game.service"
import { QuestService } from "src/app/core/services/quest.service"
import { Quest } from "src/app/models/quest.model"

@Component({
  selector: "app-game-bar",
  templateUrl: "./game-bar.component.html",
  styleUrls: ["./game-bar.component.scss"],
})
export class GameBarComponent implements OnInit {
  constructor(
    private _gameService: GameService,
    private _questService: QuestService
  ) {}

  runLightYears$!: Observable<number>
  questPool$!: Observable<Quest[]>
  isQuestModalShown: boolean = false

  ngOnInit(): void {
    this.runLightYears$ = this._gameService.runLightYears$
    this.questPool$ = this._questService.currentQuestPool$
  }

  toggleQuestModal(): void {
    this.isQuestModalShown = !this.isQuestModalShown
  }
}
