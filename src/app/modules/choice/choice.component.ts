import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs'
import { EventService } from 'src/app/core/services/events.service';
import { EventModel } from 'src/app/models/event.model';

@Component({
  selector: 'app-choice',
  templateUrl: './choice.component.html',
  styleUrls: ['./choice.component.scss'],
})
export class ChoiceComponent implements OnInit {
  constructor(private _eventService: EventService) {}

  currentEvent$!: Observable<EventModel>;

  ngOnInit(): void {
    this.currentEvent$ = this._eventService.currentEvent$;
  }
}
