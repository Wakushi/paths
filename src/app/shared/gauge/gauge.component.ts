import { Component, OnInit } from "@angular/core"
import { Observable } from "rxjs"
import { GaugesService } from "src/app/core/services/gauges.service"
import { ItemService } from "src/app/core/services/items.service"

@Component({
  selector: "app-gauge",
  templateUrl: "./gauge.component.html",
  styleUrls: ["./gauge.component.scss"],
})
export class GaugeComponent implements OnInit {
  constructor(
    private _gaugesService: GaugesService,
    private _itemService: ItemService
  ) {}

  timeGauge$!: Observable<number>
  energyGauge$!: Observable<number>
  healthGauge$!: Observable<number>
  mentalGauge$!: Observable<number>

  highlightTimeGauge$!: Observable<boolean>
  highlightEnergyGauge$!: Observable<boolean>
  highlightHealthGauge$!: Observable<boolean>
  highlightMentalGauge$!: Observable<boolean>

  chronicubeRelic$!: Observable<boolean>

  ngOnInit(): void {
    this.timeGauge$ = this._gaugesService.timeGauge$
    this.energyGauge$ = this._gaugesService.energyGauge$
    this.healthGauge$ = this._gaugesService.healthGauge$
    this.mentalGauge$ = this._gaugesService.mentalGauge$
    this.highlightTimeGauge$ = this._gaugesService.highlightTimeGauge$
    this.highlightEnergyGauge$ = this._gaugesService.highlightEnergyGauge$
    this.highlightHealthGauge$ = this._gaugesService.highlightHealthGauge$
    this.highlightMentalGauge$ = this._gaugesService.highlightMentalGauge$
    this.chronicubeRelic$ = this._itemService.chronicubeRelic$
  }
}
