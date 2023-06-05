import { Injectable } from "@angular/core"
import { BehaviorSubject, Subject } from "rxjs"

@Injectable({
  providedIn: "root",
})
export class MusicService {
  isMusicPlaying$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  )

  private playAudioSource = new Subject<void>()
  private pauseAudioSource = new Subject<void>()

  // Observable string streams
  playAudio$ = this.playAudioSource.asObservable()
  pauseAudio$ = this.pauseAudioSource.asObservable()

  // Service message commands
  play() {
    this.playAudioSource.next()
  }

  pause() {
    this.pauseAudioSource.next()
  }
}
