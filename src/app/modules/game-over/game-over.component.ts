import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs'
import { GameService } from 'src/app/core/services/game.service';
import { GaugesService } from 'src/app/core/services/gauges.service';

@Component({
  selector: 'app-game-over',
  templateUrl: './game-over.component.html',
  styleUrls: ['./game-over.component.scss'],
})
export class GameOverComponent implements OnInit {
  constructor(
    private _gameService: GameService,
    private _gaugeService: GaugesService
  ) {}

  deathMessage$!: Observable<string>

  ngOnInit(): void {
    this.deathMessage$ = this._gameService.deathMessage$ 
  }

  onTryAgain(): void {
    this._gameService.isGameOver$.next(false);
    this._gaugeService.resetGauges()
  }
}
