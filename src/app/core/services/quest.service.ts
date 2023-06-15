import { Injectable } from "@angular/core"
import { BehaviorSubject } from "rxjs"
import { Quest } from "src/app/models/quest.model"
import { questsCollection } from "./quests-collection"

@Injectable({
  providedIn: "root",
})
export class QuestService {
  quests: Quest[] = [...questsCollection]
  currentQuestPool$: BehaviorSubject<Quest[]> = new BehaviorSubject<Quest[]>([])

  initializeQuestPool(): void {
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
    const quests = this.currentQuestPool$.value.filter(
      (quest) => questId !== quest.questId
    )
    this.currentQuestPool$.next(quests)
    if (this.currentQuestPool$.value.length < 3) {
      this.injectNextQuest()
    }
  }
}
