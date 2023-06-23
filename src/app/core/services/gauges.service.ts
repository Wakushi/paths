import { Injectable } from "@angular/core"
import { BehaviorSubject } from "rxjs"
import { GameService } from "./game.service"
import { EventService } from "./events.service"
import { ItemService } from "./items.service"
import { deathMessages, Gauge, Reach } from "./death-message-collection"
import { getRandomIndex } from "../utils/utils"
import { UserService } from "./user-service"

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

  timeGaugeCap: number = 100
  energyGaugeCap: number = 100
  healthGaugeCap: number = 100
  mentalGaugeCap: number = 100

  timeGaugeInit: number = 50
  energyGaugeInit: number = 50
  healthGaugeInit: number = 50
  mentalGaugeInit: number = 50

  constructor(
    private _gameService: GameService,
    private _eventService: EventService,
    private _itemService: ItemService,
    private _userService: UserService
  ) {}

  updateGauge(gauge: string, value: number): void {
    switch (gauge) {
      case "time":
        const newTimeValue = this.timeGauge$.value + value
        this.timeGauge$.next(newTimeValue)
        if (this.timeGauge$.value >= this.timeGaugeCap) {
          this.onGameOver("time", "100")
        } else if (this.timeGauge$.value <= 0) {
          this.timeGauge$.next(0)
          this.onGameOver("time", "0")
        }
        break
      case "energy":
        const newEnergyValue = this.energyGauge$.value + value
        this.energyGauge$.next(newEnergyValue)
        if (this.energyGauge$.value >= this.energyGaugeCap) {
          this.onGameOver("energy", "100")
        } else if (this.energyGauge$.value <= 0) {
          this.energyGauge$.next(0)
          this.onGameOver("energy", "0")
        }
        break
      case "health":
        const newHealthValue = this.healthGauge$.value + value
        this.healthGauge$.next(newHealthValue)
        if (this.healthGauge$.value >= this.healthGaugeCap) {
          this.onGameOver("health", "100")
        } else if (this.healthGauge$.value <= 0) {
          this.healthGauge$.next(0)
          this.onGameOver("health", "0")
        }
        break
      case "mental":
        const newMentalValue = this.mentalGauge$.value + value
        this.mentalGauge$.next(newMentalValue)
        if (this.mentalGauge$.value >= this.mentalGaugeCap) {
          this.onGameOver("mental", "100")
        } else if (this.mentalGauge$.value <= 0) {
          this.mentalGauge$.next(0)
          this.onGameOver("mental", "0")
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

  onGameOver(reason: Gauge, reach: Reach): void {
    this._gameService.isGameOver$.next(true)
    this._gameService.isBackgroundMoving$.next(true)
    this._gameService.deathMessage$.next(
      this.getRandomDeathMessage(reason, reach)
    )
    this._userService.setBestScore(this._eventService.eventCounter)
  }

  getRandomDeathMessage(gauge: Gauge, reach: Reach) {
    const customDeathMessages = deathMessages[gauge][reach]
    const randomIndex = getRandomIndex(customDeathMessages)
    return customDeathMessages[randomIndex]
  }

  resetGauges(): void {
    this.timeGauge$.next(this.timeGaugeInit)
    this.energyGauge$.next(this.energyGaugeInit)
    this.healthGauge$.next(this.healthGaugeInit)
    this.mentalGauge$.next(this.mentalGaugeInit)
  }
}
