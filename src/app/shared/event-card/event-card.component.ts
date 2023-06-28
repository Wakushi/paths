import {
  AfterViewInit,
  Component,
  ElementRef,
  Renderer2,
  ViewChild,
  Input,
  OnInit,
} from "@angular/core"
import { Observable, first, map } from "rxjs"
import { EventService } from "src/app/core/services/events.service"
import { GameService } from "src/app/core/services/game.service"
import { GaugesService } from "src/app/core/services/gauges.service"
import { ImagePreloadService } from "src/app/core/services/image-preload.service"
import { EventModel } from "src/app/models/event.model"

@Component({
  selector: "app-event-card",
  templateUrl: "./event-card.component.html",
  styleUrls: ["./event-card.component.scss"],
})
export class EventCardComponent implements OnInit, AfterViewInit {
  @Input() event$!: Observable<EventModel>
  @ViewChild("eventCard") eventCard!: ElementRef
  @ViewChild("leftChoice") leftChoice!: ElementRef
  @ViewChild("rightChoice") rightChoice!: ElementRef
  xStart: number = 0
  currentX: number = 0
  isDraggingCard: boolean = false
  animateCard: boolean = true
  isDeckVisible$!: Observable<boolean>
  eventImage: HTMLImageElement | undefined

  constructor(
    private _eventService: EventService,
    private _gaugesService: GaugesService,
    private _gameService: GameService,
    private renderer: Renderer2,
    private imagePreloadService: ImagePreloadService
  ) {}

  ngOnInit(): void {
    this.isDeckVisible$ = this._gameService.isDeckVisible$
    this.event$.subscribe((event) => {
      this.imagePreloadService
        .load(event.eventImage)
        .then(
          () =>
            (this.eventImage = this.imagePreloadService.getImage(
              event.eventImage
            ))
        )
    })
  }

  ngAfterViewInit() {
    this.eventCard.nativeElement.addEventListener("mousedown", (e: any) =>
      this.onStart(e)
    )
    this.eventCard.nativeElement.addEventListener("touchstart", (e: any) =>
      this.onStart(e)
    )
    this.eventCard.nativeElement.addEventListener("mousemove", (e: any) =>
      this.onMove(e)
    )
    this.eventCard.nativeElement.addEventListener("touchmove", (e: any) =>
      this.onMove(e)
    )
    this.eventCard.nativeElement.addEventListener("mouseup", () => this.onEnd())
    this.eventCard.nativeElement.addEventListener("touchend", () =>
      this.onEnd()
    )
    this.eventCard.nativeElement.addEventListener("transitionend", () =>
      this.onTransitionEnd()
    )
  }

  onChoice(direction: number): void {
    // Checks on which side the card was dropped and converts (map) the Subject into its consequence
    const consequence$ =
      direction === 1
        ? this.event$.pipe(map((event) => event.rightChoice.consequence))
        : this.event$.pipe(map((event) => event.leftChoice.consequence))
    // We iterate on the value of the Subject to update the gauge accordingly
    consequence$.pipe(first()).subscribe((consequenceObj) => {
      Object.entries(consequenceObj).forEach(([key, value]) => {
        if (key !== "special") {
          this._gaugesService.updateGauge(key, +value)
        } else {
          this._eventService.onSpecialEvent(value.toString())
        }
      })
    })

    if (!this._gameService.isGameOver$.value) {
      this._eventService.onNextEvent()
      this.fadeIn()
      setTimeout(() => {
        this.animateCard = false
      }, 500)
      setTimeout(() => {
        this.animateCard = true
      }, 500)
    }
  }

  onStart(e: any) {
    this.isDraggingCard = true
    if (e.type === "touchstart") {
      this.xStart = e.touches[0].clientX
    } else {
      this.xStart = e.clientX
    }
  }

  onMove(e: any) {
    if (!this.isDraggingCard) return
    if (e.type === "touchmove") {
      this.currentX = e.touches[0].clientX - this.xStart
    } else {
      this.currentX = e.clientX - this.xStart
    }
    const rotationAngle = this.currentX / 30
    this.renderer.setStyle(
      this.eventCard.nativeElement,
      "transform",
      `translateX(${this.currentX}px) rotate(${rotationAngle}deg)`
    )
    if (this.currentX === 0) {
      this._gaugesService.resetGaugeHighlight()
    }
    if (this.currentX > 0) {
      this._gaugesService.resetGaugeHighlight()
      this._gaugesService.highlightGauge("right")
      this.renderer.setStyle(this.leftChoice.nativeElement, "opacity", 0)
      this.renderer.setStyle(
        this.rightChoice.nativeElement,
        "opacity",
        Math.abs(this.currentX / 100)
      )
    }
    if (this.currentX < 0) {
      this._gaugesService.resetGaugeHighlight()
      this._gaugesService.highlightGauge("left")
      this.renderer.setStyle(this.rightChoice.nativeElement, "opacity", 0)
      this.renderer.setStyle(
        this.leftChoice.nativeElement,
        "opacity",
        Math.abs(this.currentX / 100)
      )
    }
  }

  onEnd() {
    this.isDraggingCard = false
    this._gaugesService.resetGaugeHighlight()
    if (Math.abs(this.currentX) > 150) {
      const direction = this.currentX > 0 ? 1 : -1
      this.onChoice(direction)
      this.currentX = direction * window.innerWidth
      this.renderer.setStyle(this.eventCard.nativeElement, "opacity", "0")
    } else {
      this.currentX = 0
    }
    this.renderer.setStyle(this.leftChoice.nativeElement, "opacity", 0)
    this.renderer.setStyle(this.rightChoice.nativeElement, "opacity", 0)
    this.renderer.setStyle(
      this.eventCard.nativeElement,
      "transition",
      "transform 0.5s, opacity 0.5s"
    )
    this.renderer.setStyle(
      this.eventCard.nativeElement,
      "transform",
      `translateX(${this.currentX}px)`
    )
  }

  onTransitionEnd() {
    this.renderer.setStyle(this.eventCard.nativeElement, "transition", "none")
    this.renderer.setStyle(this.eventCard.nativeElement, "transform", "none")
    this.renderer.setStyle(this.eventCard.nativeElement, "opacity", "1")
    this.currentX = 0
  }

  fadeIn() {
    this.renderer.setStyle(this.eventCard.nativeElement, "opacity", "0")
    this.renderer.setStyle(
      this.eventCard.nativeElement,
      "transition",
      "opacity 0.5s"
    )
    this.renderer.setStyle(this.eventCard.nativeElement, "opacity", "1")
  }
}
