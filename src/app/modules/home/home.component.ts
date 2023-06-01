import { Component, ElementRef, ViewChild } from "@angular/core"
import { Router } from "@angular/router"
import { EventService } from "src/app/core/services/events.service"

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent {
  constructor(private _router: Router, private _eventService: EventService) {}

  startGame(): void {
    this._router.navigateByUrl("paths")
    this._eventService.initializeEventArray()
  }
}
