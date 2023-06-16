import { Injectable } from "@angular/core"
import { BehaviorSubject } from "rxjs"

@Injectable({
  providedIn: "root",
})
export class ItemService {
  gaugeRelic$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)

  resetItems(): void {
    this.gaugeRelic$.next(false)
  }
}
