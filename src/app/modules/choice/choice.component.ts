import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  OnDestroy,
} from "@angular/core"
import { Observable, BehaviorSubject, Subscription } from "rxjs"
import { EventService } from "src/app/core/services/events.service"
import { GameService } from "src/app/core/services/game.service"
import { MusicService } from "src/app/core/services/music.service"
import { QuestService } from "src/app/core/services/quest.service"
import { UserService } from "src/app/core/services/user-service"
import { EventModel } from "src/app/models/event.model"

@Component({
  selector: "app-choice",
  templateUrl: "./choice.component.html",
  styleUrls: ["./choice.component.scss"],
})
export class ChoiceComponent implements OnInit, OnDestroy {

  constructor(
    private _eventService: EventService,
    private _gameService: GameService,
    private _questService: QuestService,
    private _userService: UserService,
    private _musicService: MusicService
  ) {}

  currentEvent$!: Observable<EventModel>
  isGameOver$!: Observable<boolean>
  isMusicPlaying$!: BehaviorSubject<boolean>
  playSubscription: Subscription = new Subscription
  pauseSubscription: Subscription = new Subscription
  mainTheme = new Audio("../../assets/sounds/music/nova.mp3")

  ngOnInit(): void {
    if (this._userService.checkHasSeenIntro()) {
      this._eventService.isTimeSuspended$.next(false)
    }
    this.currentEvent$ = this._eventService.currentEvent$
    this.isGameOver$ = this._gameService.isGameOver$
    this._eventService.initializeEventArray()
    this._questService.initializeQuestPool()
    this.initializeAudio() 
  }

  initializeAudio(): void {
    this.mainTheme.play()
    this._musicService.isMusicPlaying$.next(true)
    this.playSubscription = this._musicService.playAudio$.subscribe(() => {
      this.mainTheme.play()
    })
    this.pauseSubscription = this._musicService.pauseAudio$.subscribe(() => {
      this.mainTheme.pause()
    })
  }

  ngOnDestroy() {
    this.playSubscription.unsubscribe()
    this.pauseSubscription.unsubscribe()
  }
}
