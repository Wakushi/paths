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

  itemsInformation: {
    [key: string]: {
      name: string
      desc: string
    }
  } = {
    GAUGE_RELIC: {
      name: "Farseer Relic",
      desc: "A strange relic that allows you to anticipate the future.. somehow. It feels like some parts are missing.",
    },
  }

  resetItems(): void {
    this.gaugeRelic$.next(false)
  }
}
