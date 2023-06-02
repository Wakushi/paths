import { Component, OnInit } from "@angular/core"
import { Observable } from "rxjs"
import { EventService } from "src/app/core/services/events.service"
import { GameService } from "src/app/core/services/game.service"
import { QuestService } from "src/app/core/services/quest.service"
import { UserService } from "src/app/core/services/user-service"
import { EventModel } from "src/app/models/event.model"

@Component({
  selector: "app-choice",
  templateUrl: "./choice.component.html",
  styleUrls: ["./choice.component.scss"],
})
export class ChoiceComponent implements OnInit {
  constructor(
    private _eventService: EventService,
    private _gameService: GameService,
    private _questService: QuestService,
    private _userService: UserService
  ) {}

  currentEvent$!: Observable<EventModel>
  isGameOver$!: Observable<boolean>

  ngOnInit(): void {
    if(this._userService.checkHasSeenIntro()){
      this._eventService.isTimeSuspended$.next(false)
    }
    this.currentEvent$ = this._eventService.currentEvent$
    this.isGameOver$ = this._gameService.isGameOver$
    this._eventService.initializeEventArray()
    this._questService.initializeQuestPool()
  }
}
