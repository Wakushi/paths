import { Component, OnInit } from "@angular/core"
import { Router } from "@angular/router"
import { Observable } from "rxjs"
import { UserService } from "src/app/core/services/user-service"

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  constructor(private _router: Router, private _userService: UserService) {}

  isRulesModalShowing: boolean = false
  userBestScore$!: Observable<number>

  ngOnInit(): void {
    this._userService.getBestScore()
    this.userBestScore$ = this._userService.userBestScore$
  }

  startGame(): void {
    this._router.navigateByUrl("paths")
  }

  toggleRulesModal(): void {
    this.isRulesModalShowing = !this.isRulesModalShowing
  }
}
