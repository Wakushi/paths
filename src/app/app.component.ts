import { AfterViewInit, Component, ElementRef, ViewChild } from "@angular/core"

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements AfterViewInit {
  title = "paths"

  @ViewChild("mainTheme") mainThemeAudio!: ElementRef

  isMusicPlaying: boolean = false

  onPlayButton(): void {
    this.isMusicPlaying
      ? this.mainThemeAudio.nativeElement.pause()
      : this.mainThemeAudio.nativeElement.play()

    this.isMusicPlaying = !this.isMusicPlaying
  }

  ngAfterViewInit() {
    this.mainThemeAudio.nativeElement.onended = () => {
      this.isMusicPlaying = false
    }
  }
}
