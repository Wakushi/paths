import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GaugesService {
  
    timeGauge$:BehaviorSubject<number> = new BehaviorSubject<number>(50)
    energyGauge$:BehaviorSubject<number> = new BehaviorSubject<number>(50)
    healthGauge$:BehaviorSubject<number> = new BehaviorSubject<number>(50)
    mentalGauge$:BehaviorSubject<number> = new BehaviorSubject<number>(50)

    updateGauge(gauge:string, value:number):void {
        switch (gauge) {
            case "time":
                const newTimeValue = this.timeGauge$.value + value
                this.timeGauge$.next(newTimeValue)
                break;
            case "energy":
                const newEnergyValue = this.energyGauge$.value + value
                this.energyGauge$.next(newEnergyValue)
                break;
            case "health":
                const newHealthValue = this.healthGauge$.value + value
                this.healthGauge$.next(newHealthValue)
                break;
            case "mental":
                const newMentalValue = this.mentalGauge$.value + value
                this.mentalGauge$.next(newMentalValue)
                break;
        
            default:
                break;
        }
    }

}
