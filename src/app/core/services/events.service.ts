import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { EventModel } from 'src/app/models/event.model';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  AI_RABBIT: string = '../../assets/images/pnj/rabbit.png';
  CLOCKMAKER: string = '../../assets/images/pnj/clockmaker.png';

  eventCounter: number = 0;
  currentEvent$: BehaviorSubject<EventModel> = new BehaviorSubject<EventModel>({
    eventName: 'AI Rabbit',
    dialog: 'hello traveler',
    eventImage: this.AI_RABBIT,
    rightChoice: {
      text: 'Red pill',
      consequence: { time: 10, energy: -10 },
    },
    leftChoice: {
      text: 'Red pill',
      consequence: { time: 10, energy: -10 },
    },
  });

  onNextEvent(): void {
    setTimeout(() => {
      this.eventCounter++;
      this.currentEvent$.next(this.events[this.eventCounter]);
    }, 500);
  }

  events: EventModel[] = [
    {
      eventName: 'AI Rabbit',
      dialog: 'hello traveler',
      eventImage: this.AI_RABBIT,
      rightChoice: {
        text: 'Red pill',
        consequence: { time: 10, energy: -10 },
      },
      leftChoice: {
        text: 'Red pill',
        consequence: { time: 10, energy: -10 },
      },
    },
    {
      eventName: 'Horloger',
      dialog: 'Look at my shop',
      eventImage: this.CLOCKMAKER,
      rightChoice: {
        text: 'Gold watch',
        consequence: { time: 20, mental: 30 },
      },
      leftChoice: {
        text: 'Red pill',
        consequence: { time: 10, energy: -10 },
      },
    },
  ];
}
