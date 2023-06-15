import { Component, Input, OnInit } from "@angular/core"
import { EventService } from "src/app/core/services/events.service"
import { Observable } from "rxjs"

@Component({
  selector: "app-snackbar",
  templateUrl: "./snackbar.component.html",
  styleUrls: ["./snackbar.component.scss"],
})
export class SnackbarComponent implements OnInit {
  @Input() snackEvent!: Observable<string>
  showSnackbar$!: Observable<boolean>

  constructor(private _eventService: EventService) {}

  ngOnInit(): void {
    this.showSnackbar$ = this._eventService.showSnackbar$
  }
}
