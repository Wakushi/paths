import {
  AfterViewInit,
  Component,
  ElementRef,
  Renderer2,
  ViewChild,
  Input,
} from '@angular/core';
import { Observable } from 'rxjs';
import { EventService } from 'src/app/core/services/events.service';
import { EventModel } from 'src/app/models/event.model';

@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.scss'],
})
export class EventCardComponent implements AfterViewInit {
  @Input() event$!: Observable<EventModel>;
  @ViewChild('eventCard') eventCard!: ElementRef;
  xStart: number = 0;
  currentX: number = 0;
  isDraggingCard: boolean = false;

  constructor(
    private _eventService: EventService,
    private renderer: Renderer2
  ) {}

  ngAfterViewInit() {
    this.eventCard.nativeElement.addEventListener('mousedown', (e: any) =>
      this.onStart(e)
    );
    this.eventCard.nativeElement.addEventListener('touchstart', (e: any) =>
      this.onStart(e)
    );
    this.eventCard.nativeElement.addEventListener('mousemove', (e: any) =>
      this.onMove(e)
    );
    this.eventCard.nativeElement.addEventListener('touchmove', (e: any) =>
      this.onMove(e)
    );
    this.eventCard.nativeElement.addEventListener('mouseup', () =>
      this.onEnd()
    );
    this.eventCard.nativeElement.addEventListener('touchend', () =>
      this.onEnd()
    );
    this.eventCard.nativeElement.addEventListener('transitionend', () =>
      this.onTransitionEnd()
    );
  }

  onStart(e: any) {
    this.isDraggingCard = true;
    if (e.type === 'touchstart') {
      this.xStart = e.touches[0].clientX;
    } else {
      this.xStart = e.clientX;
    }
  }

  onMove(e: any) {
    if (!this.isDraggingCard) return;
    if (e.type === 'touchmove') {
      this.currentX = e.touches[0].clientX - this.xStart;
    } else {
      this.currentX = e.clientX - this.xStart;
    }

    this.renderer.setStyle(
      this.eventCard.nativeElement,
      'transform',
      `translateX(${this.currentX}px)`
    );
  }

  onEnd() {
    this.isDraggingCard = false;
    if (Math.abs(this.currentX) > window.innerWidth / 3) {
      const direction = this.currentX > 0 ? 1 : -1;
      this.onChoice(direction);
      this.currentX = direction * window.innerWidth;
      this.renderer.setStyle(this.eventCard.nativeElement, 'opacity', '0');
    } else {
      this.currentX = 0;
    }

    this.renderer.setStyle(
      this.eventCard.nativeElement,
      'transition',
      'transform 0.5s, opacity 0.5s'
    );
    this.renderer.setStyle(
      this.eventCard.nativeElement,
      'transform',
      `translateX(${this.currentX}px)`
    );
  }

  onTransitionEnd() {
    this.renderer.setStyle(this.eventCard.nativeElement, 'transition', 'none');
    this.renderer.setStyle(this.eventCard.nativeElement, 'transform', 'none');
    this.renderer.setStyle(this.eventCard.nativeElement, 'opacity', '1');
    this.currentX = 0;
  }

  fadeIn() {
    this.renderer.setStyle(this.eventCard.nativeElement, 'opacity', '0');
    this.renderer.setStyle(
      this.eventCard.nativeElement,
      'transition',
      'opacity 0.5s'
    );
    this.renderer.setStyle(this.eventCard.nativeElement, 'opacity', '1');
  }

  onChoice(direction: number): void {
    if (direction === 1) {
    } else {
    }
    this._eventService.onNextEvent();
    this.fadeIn();
  }
}