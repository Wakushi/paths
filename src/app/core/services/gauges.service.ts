import { Injectable } from "@angular/core"
import { BehaviorSubject } from "rxjs"
import { GameService } from "./game.service"
import { EventService } from "./events.service"
import { ItemService } from "./items.service"

@Injectable({
  providedIn: "root",
})
export class GaugesService {
  timeGauge$: BehaviorSubject<number> = new BehaviorSubject<number>(50)
  energyGauge$: BehaviorSubject<number> = new BehaviorSubject<number>(50)
  healthGauge$: BehaviorSubject<number> = new BehaviorSubject<number>(50)
  mentalGauge$: BehaviorSubject<number> = new BehaviorSubject<number>(50)

  highlightTimeGauge$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  )
  highlightEnergyGauge$: BehaviorSubject<boolean> =
    new BehaviorSubject<boolean>(false)
  highlightHealthGauge$: BehaviorSubject<boolean> =
    new BehaviorSubject<boolean>(false)
  highlightMentalGauge$: BehaviorSubject<boolean> =
    new BehaviorSubject<boolean>(false)

  constructor(
    private _gameService: GameService,
    private _eventService: EventService,
    private _itemService: ItemService
  ) {}

  updateGauge(gauge: string, value: number): void {
    switch (gauge) {
      case "time":
        const newTimeValue = this.timeGauge$.value + value
        this.timeGauge$.next(newTimeValue)
        if (this.timeGauge$.value >= 100) {
          this.onGameOver("time", "max")
        } else if (this.timeGauge$.value <= 0) {
          this.timeGauge$.next(0)
          this.onGameOver("time", "min")
        }
        break
      case "energy":
        const newEnergyValue = this.energyGauge$.value + value
        this.energyGauge$.next(newEnergyValue)
        if (this.energyGauge$.value >= 100) {
          this.onGameOver("energy", "max")
        } else if (this.energyGauge$.value <= 0) {
          this.energyGauge$.next(0)
          this.onGameOver("energy", "min")
        }
        break
      case "health":
        const newHealthValue = this.healthGauge$.value + value
        this.healthGauge$.next(newHealthValue)
        if (this.healthGauge$.value >= 100) {
          this.onGameOver("health", "max")
        } else if (this.healthGauge$.value <= 0) {
          this.healthGauge$.next(0)
          this.onGameOver("health", "min")
        }
        break
      case "mental":
        const newMentalValue = this.mentalGauge$.value + value
        this.mentalGauge$.next(newMentalValue)
        if (this.mentalGauge$.value >= 100) {
          this.onGameOver("mental", "max")
        } else if (this.mentalGauge$.value <= 0) {
          this.mentalGauge$.next(0)
          this.onGameOver("mental", "min")
        }
        break

      default:
        break
    }
  }

  highlightGauge(direction: string): void {
    if (!this._itemService.gaugeRelic$.value) return
    const currentEvent = this._eventService.currentEvent$.value
    const consequences: string[] =
      direction === "left"
        ? Object.keys(currentEvent.leftChoice.consequence)
        : Object.keys(currentEvent.rightChoice.consequence)
    consequences.forEach((consequence: string) => {
      switch (consequence) {
        case "time":
          this.highlightTimeGauge$.next(true)
          break
        case "mental":
          this.highlightMentalGauge$.next(true)
          break
        case "health":
          this.highlightHealthGauge$.next(true)
          break
        case "energy":
          this.highlightEnergyGauge$.next(true)
          break
        default:
          break
      }
    })
  }

  resetGaugeHighlight(): void {
    this.highlightTimeGauge$.next(false)
    this.highlightMentalGauge$.next(false)
    this.highlightHealthGauge$.next(false)
    this.highlightEnergyGauge$.next(false)
  }

  onGameOver(reason: string, reach: string): void {
    this._gameService.isGameOver$.next(true)
    this._gameService.deathMessage$.next("You were killed by " + reason)
  }

  resetGauges(): void {
    this.timeGauge$.next(50)
    this.energyGauge$.next(50)
    this.healthGauge$.next(50)
    this.mentalGauge$.next(50)
  }
}
