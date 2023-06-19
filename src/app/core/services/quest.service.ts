import { Injectable } from "@angular/core"
import { BehaviorSubject } from "rxjs"
import { Quest } from "src/app/models/quest.model"
import { questsCollection } from "./quests-collection"
import { UserService } from "./user-service"

@Injectable({
  providedIn: "root",
})
export class QuestService {
  quests: Quest[] = [...questsCollection]
  questsDone: Quest[] = []
  currentQuestPool$: BehaviorSubject<Quest[]> = new BehaviorSubject<Quest[]>([])

  constructor(private _userService: UserService) {}

  initializeQuestPool(): void {
    this.quests = [...questsCollection]
    this.syncSavedQuests()
    if (this.quests.length >= 3) {
      const firstQuests = this.quests.splice(0, 3)
      this.currentQuestPool$.next(firstQuests)
    }
  }

  injectNextQuest(): void {
    const nextQuest = this.quests.splice(0, 1)[0]
    const quests = this.currentQuestPool$.value
    quests.push(nextQuest)
    this.currentQuestPool$.next(quests)
  }

  removeQuest(questId: string): void {
    const finishedQuest = questsCollection.find(
      (quest) => quest.questId === questId
    )
    if (finishedQuest && !this.questsDone.includes(finishedQuest)) this.questsDone.push(finishedQuest)
    this._userService.saveQuestList(this.questsDone)
    const quests = this.currentQuestPool$.value.filter(
      (quest) => questId !== quest.questId
    )
    this.currentQuestPool$.next(quests)
    if (this.currentQuestPool$.value.length < 3) {
      this.injectNextQuest()
    }
  }

  syncSavedQuests(): void {
    const savedQuestsIds = localStorage.getItem("quests")?.split(",")
    this.questsDone = []
    if (savedQuestsIds) {
      savedQuestsIds.forEach((savedQuestId) => {
        const savedQuest = this.quests.find(
          (quest) => quest.questId === savedQuestId
        )
        if (savedQuest) this.questsDone.push(savedQuest)
        this.quests = this.quests.filter(
          (quest) => quest.questId !== savedQuestId
        )
      })
    }
  }

  isQuestDone(questId: string): boolean {
    return this.questsDone.some((quest) => quest.questId === questId)
  }
}
