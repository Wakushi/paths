import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GaugesService } from 'src/app/core/services/gauges.service';

@Component({
  selector: 'app-gauge',
  templateUrl: './gauge.component.html',
  styleUrls: ['./gauge.component.scss'],
})
export class GaugeComponent implements OnInit {
  constructor(private _gaugesService: GaugesService) {}

  timeGauge$!: Observable<number>;
  energyGauge$!: Observable<number>;
  healthGauge$!: Observable<number>;
  mentalGauge$!: Observable<number>;

  ngOnInit(): void {
    this.timeGauge$ = this._gaugesService.timeGauge$;
    this.energyGauge$ = this._gaugesService.energyGauge$;
    this.healthGauge$ = this._gaugesService.healthGauge$;
    this.mentalGauge$ = this._gaugesService.mentalGauge$;
  }
}
