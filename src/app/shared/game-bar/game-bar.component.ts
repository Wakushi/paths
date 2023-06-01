import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs'
import { GameService } from 'src/app/core/services/game.service'

@Component({
  selector: 'app-game-bar',
  templateUrl: './game-bar.component.html',
  styleUrls: ['./game-bar.component.scss']
})
export class GameBarComponent implements OnInit {

  constructor(private _gameService:GameService){}

  runLightYears$!: Observable<number>

  ngOnInit(): void {
    this.runLightYears$ = this._gameService.runLightYears$
  }

}
