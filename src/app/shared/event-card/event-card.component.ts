import {
  AfterViewInit,
  Component,
  ElementRef,
  Renderer2,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.scss'],
})
export class EventCardComponent implements AfterViewInit {
  @ViewChild('eventCard') eventCard!: ElementRef;
  xStart: number = 0;
  currentX: number = 0;
  isDraggingCard: boolean = false;

  constructor(private renderer: Renderer2) {}

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
      this.onChoice(direction)
      this.currentX = direction * window.innerWidth;
    } else {
      this.currentX = 0;
    }

    this.renderer.setStyle(
      this.eventCard.nativeElement,
      'transition',
      'transform 0.5s'
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
    this.currentX = 0;
  }

  onChoice(direction:number):void {
    if(direction === 1) {
      console.log("right")
    } else {
      console.log("left")
    }
  }
}
