import { Component, OnInit } from "@angular/core"
import { Observable } from "rxjs"
import { GameService } from "src/app/core/services/game.service"
import { ItemService } from "src/app/core/services/items.service"
import { QuestService } from "src/app/core/services/quest.service"
import { UserService } from "src/app/core/services/user-service"
import { Quest } from "src/app/models/quest.model"

@Component({
  selector: "app-game-bar",
  templateUrl: "./game-bar.component.html",
  styleUrls: ["./game-bar.component.scss"],
})
export class GameBarComponent implements OnInit {
  constructor(
    private _gameService: GameService,
    private _questService: QuestService,
    private _userService: UserService,
    private _itemService: ItemService
  ) {}

  runLightYears$!: Observable<number>
  questPool$!: Observable<Quest[]>
  userInventory$!: Observable<string[]>
  isQuestModalShown: boolean = false
  isSettingsModalShown: boolean = false
  itemsImage: { [key: string]: string } = this._itemService.itemsImage

  ngOnInit(): void {
    this.runLightYears$ = this._gameService.runLightYears$
    this.questPool$ = this._questService.currentQuestPool$
    this.userInventory$ = this._userService.userInventory$
  }

  toggleQuestModal(): void {
    this.isQuestModalShown = !this.isQuestModalShown
  }

  onSettings(): void {
    this.isSettingsModalShown = !this.isSettingsModalShown
  }
}
