import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GaugesService {
  timeGauge$: BehaviorSubject<number> = new BehaviorSubject<number>(50);
  energyGauge$: BehaviorSubject<number> = new BehaviorSubject<number>(50);
  healthGauge$: BehaviorSubject<number> = new BehaviorSubject<number>(50);
  mentalGauge$: BehaviorSubject<number> = new BehaviorSubject<number>(50);

  updateGauge(gauge: string, value: number): void {
    switch (gauge) {
      case 'time':
        const newTimeValue = this.timeGauge$.value + value;
        this.timeGauge$.next(newTimeValue);
        console.log(this.timeGauge$.value)
        if (this.timeGauge$.value >= 100){
            this.onGameOver('time')
        } else if (this.timeGauge$.value <= 0) {
            this.timeGauge$.next(0)
            this.onGameOver('time')
        }
         break;
      case 'energy':
        const newEnergyValue = this.energyGauge$.value + value;
        this.energyGauge$.next(newEnergyValue);
        if (this.energyGauge$.value >= 100 || this.energyGauge$.value <= 0){
            this.onGameOver('energy')
        } break;
      case 'health':
        const newHealthValue = this.healthGauge$.value + value;
        this.healthGauge$.next(newHealthValue);
        if (this.healthGauge$.value >= 100 || this.healthGauge$.value <= 0){
            this.onGameOver('health')
        } break;
      case 'mental':
        const newMentalValue = this.mentalGauge$.value + value;
        this.mentalGauge$.next(newMentalValue);
        if (this.mentalGauge$.value >= 100 || this.mentalGauge$.value <= 0){
            this.onGameOver('mental')
        } break;

      default:
        break;
    }
  }

  onGameOver(reason: string): void {
    console.log(reason, ' killed you !');
  }
}
