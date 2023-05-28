import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { EventModel } from 'src/app/models/event.model';
import { events } from './events-collection';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  
  eventCounter: number = 0;
  currentEvent$: BehaviorSubject<EventModel> = new BehaviorSubject<EventModel>(events[0]);

  onNextEvent(): void {
    setTimeout(() => {
      this.eventCounter++;
      this.currentEvent$.next(events[this.eventCounter]);
    }, 500);
  }

 
}
