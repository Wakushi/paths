import {
  Component,
  Input,
  EventEmitter,
  Output,
  ViewChild,
  ElementRef,
  AfterViewInit,
  OnInit,
} from "@angular/core"
import { Router } from "@angular/router"
import { EventService } from "src/app/core/services/events.service"
import { GameService } from "src/app/core/services/game.service"
import { GaugesService } from "src/app/core/services/gauges.service"
import { UserService } from "src/app/core/services/user-service"
import { fromEvent, Subscription, Observable } from "rxjs"
import { MusicService } from "src/app/core/services/music.service"

@Component({
  selector: "app-game-settings",
  templateUrl: "./game-settings.component.html",
  styleUrls: ["./game-settings.component.scss"],
})
export class GameSettingsComponent implements AfterViewInit, OnInit {
  @Input() isSettingsModalShown!: boolean
  @Output() closeSettingsEvent = new EventEmitter()
  @Output() toggleMusic = new EventEmitter()
  @ViewChild("resetButton") resetButton!: ElementRef

  private touchStart!: number
  private subscription: Subscription = new Subscription()
  private animationFrameId!: number
  resetProgress: number = 0
  isMusicPlaying$!: Observable<boolean>

  constructor(
    private _gameService: GameService,
    private _gaugesService: GaugesService,
    private _userService: UserService,
    private _eventService: EventService,
    private _router: Router,
    private _musicService: MusicService
  ) {}

  ngOnInit(): void {
    this.isMusicPlaying$ = this._musicService.isMusicPlaying$
  }

  ngAfterViewInit() {
    const buttonEl = this.resetButton.nativeElement

    this.subscription.add(
      fromEvent(buttonEl, "mousedown").subscribe(() => {
        this.touchStart = Date.now()
        this.updateResetProgress()
      })
    )

    this.subscription.add(
      fromEvent(buttonEl, "mouseup").subscribe(() =>
        this.stopUpdatingResetProgress()
      )
    )

    this.subscription.add(
      fromEvent(buttonEl, "touchstart").subscribe(() => {
        this.touchStart = Date.now()
        this.updateResetProgress()
      })
    )

    this.subscription.add(
      fromEvent(buttonEl, "touchend").subscribe(() =>
        this.stopUpdatingResetProgress()
      )
    )
  }

  updateResetProgress() {
    this.resetProgress = Math.min(
      ((Date.now() - this.touchStart) / 100) * 5,
      100
    )
    this.animationFrameId = requestAnimationFrame(() =>
      this.updateResetProgress()
    )
  }

  stopUpdatingResetProgress() {
    cancelAnimationFrame(this.animationFrameId)
    if (this.resetProgress >= 100) {
      this.onResetGame()
    }
    this.resetProgress = 0
  }

  getButtonStyle() {
    const backgroundColor = `linear-gradient(to right, red ${this.resetProgress}%, white ${this.resetProgress}%)`
    return {
      background: backgroundColor,
    }
  }

  onCloseSettings(): void {
    this.closeSettingsEvent.emit()
  }

  onResetGame(): void {
    this._eventService.initializeNewGame()
    this._userService.resetHasSeenIntro()
    this._gaugesService.resetGauges()
    this._gameService.runLightYears$.next(0)
    this._musicService.pause()
    this._router.navigateByUrl("")
  }

  onPlayButton(): void {
    this._musicService.isMusicPlaying$.next(
      !this._musicService.isMusicPlaying$.value
    )
    if (this._musicService.isMusicPlaying$.value) {
      this._musicService.play()
    } else {
      this._musicService.pause()
    }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }
}
