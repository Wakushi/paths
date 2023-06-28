import { Injectable } from "@angular/core"

@Injectable({
  providedIn: "root",
})
export class ImagePreloadService {
  private cache = new Map()

  load(url: string): Promise<HTMLImageElement> {
    return new Promise((resolve, reject) => {
      const image = new Image()
      image.src = url
      image.onload = () => {
        this.cache.set(url, image)
        resolve(image)
      }
      image.onerror = reject
    })
  }

  getImage(url: string): HTMLImageElement | undefined {
    return this.cache.get(url)
  }
}
