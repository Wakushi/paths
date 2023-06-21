import { Component } from "@angular/core"
import { Router } from "@angular/router"

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent {
  constructor(private _router: Router) {}

  isRulesModalShowing: boolean = false

  startGame(): void {
    this._router.navigateByUrl("paths")
  }

  toggleRulesModal(): void {
    this.isRulesModalShowing = !this.isRulesModalShowing
  }
}
