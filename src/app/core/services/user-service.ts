import { Injectable } from "@angular/core"
import { BehaviorSubject, Subject } from "rxjs"
import { ItemService } from "./items.service"
import { Quest } from "src/app/models/quest.model"

@Injectable({
  providedIn: "root",
})
export class UserService {
  hasSeenIntro$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)
  userInventory$: BehaviorSubject<string[]> = new BehaviorSubject<string[]>([])
  userBestScore$: BehaviorSubject<number> = new BehaviorSubject<number>(0)

  constructor(private _itemService: ItemService) {}

  setHasSeenIntro(): void {
    localStorage.setItem("intro", "seen")
  }

  resetHasSeenIntro(): void {
    localStorage.removeItem("intro")
    this.hasSeenIntro$.next(false)
  }

  checkHasSeenIntro(): boolean {
    if (localStorage.getItem("intro") === "seen") {
      this.hasSeenIntro$.next(true)
      return true
    } else {
      this.hasSeenIntro$.next(false)
      return false
    }
  }

  addItem(item: string): void {
    const currentInventory = this.userInventory$.value
    currentInventory.push(item)
    this.userInventory$.next(currentInventory)
    localStorage.setItem("inventory", currentInventory.join(","))
  }

  removeItem(item: string): void {
    const currentInventory = this.userInventory$.value.filter(
      (invItem) => invItem !== item
    )
    this.userInventory$.next(currentInventory)
    localStorage.setItem("inventory", currentInventory.join(","))
  }

  resetInventory(): void {
    localStorage.removeItem("inventory")
    this.userInventory$.next([])
  }

  syncSavedInventory(): void {
    const inventory = localStorage.getItem("inventory")?.split(",")
    const userInventory: string[] = []
    if (inventory) {
      inventory.forEach((item) => {
        switch (item) {
          case "GAUGE_RELIC":
            userInventory.push(item)
            this._itemService.gaugeRelic$.next(true)
            break
          case "CARTOGRAPHER_MAP":
            userInventory.push(item)
            this._itemService.cartographerMap$.next(true)
            break

          default:
            break
        }
      })
      this.userInventory$.next(userInventory)
    }
  }

  checkInventory(item: string): boolean {
    const inventory = localStorage.getItem("inventory")?.split(",")
    if (!inventory) return false
    return inventory.includes(item)
  }

  saveQuestList(questList: Quest[]): void {
    const questIds = questList.map((quest) => quest.questId)
    localStorage.setItem("quests", questIds.join(","))
  }

  resetQuestList(): void {
    localStorage.removeItem("quests")
  }

  setBestScore(score: number): void {
    if (score > this.userBestScore$.value) {
      localStorage.setItem("score", score.toString())
    }
  }
  getBestScore(): void {
    const score = localStorage.getItem("score")
    if (score) this.userBestScore$.next(+score)
  }
}
