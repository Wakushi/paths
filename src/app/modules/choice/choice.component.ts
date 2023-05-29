import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { EventService } from 'src/app/core/services/events.service';
import { GameService } from 'src/app/core/services/game.service';
import { EventModel } from 'src/app/models/event.model';

@Component({
  selector: 'app-choice',
  templateUrl: './choice.component.html',
  styleUrls: ['./choice.component.scss'],
})
export class ChoiceComponent implements OnInit {
  constructor(
    private _eventService: EventService,
    private _gameService: GameService
  ) {}

  currentEvent$!: Observable<EventModel>;
  isGameOver$!: Observable<boolean>

  ngOnInit(): void {
    this.currentEvent$ = this._eventService.currentEvent$;
    this.isGameOver$ = this._gameService.isGameOver$
  }
}
