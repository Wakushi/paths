import { Injectable } from "@angular/core"
import { BehaviorSubject } from "rxjs"

@Injectable({
  providedIn: "root",
})
export class ItemService {
  gaugeRelic$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)

  itemsImage: { [key: string]: string } = {
    GAUGE_RELIC: "../../../assets/images/items/gauge-relic-item.webp",
  }

  resetItems(): void {
    this.gaugeRelic$.next(false)
  }
}
