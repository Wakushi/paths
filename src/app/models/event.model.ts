export class EventModel {
  eventName!: string
  dialog!: string
  eventImage!: string
  rightChoice!: {
    text: string
    consequence: {
      time?: number
      energy?: number
      health?: number
      mental?: number
      special?: string
    }
  }
  leftChoice!: {
    text: string
    consequence: {
      time?: number
      energy?: number
      health?: number
      mental?: number
      special?: string
    }
  }
  quest?: string
}
