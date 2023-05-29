import { Component } from '@angular/core';
import { GameService } from 'src/app/core/services/game.service';
import { GaugesService } from 'src/app/core/services/gauges.service';

@Component({
  selector: 'app-game-over',
  templateUrl: './game-over.component.html',
  styleUrls: ['./game-over.component.scss'],
})
export class GameOverComponent {
  constructor(
    private _gameService: GameService,
    private _gaugeService: GaugesService
  ) {}

  onTryAgain(): void {
    this._gameService.isGameOver$.next(false);
    this._gaugeService.resetGauges()
  }
}
