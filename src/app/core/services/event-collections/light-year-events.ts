import { EventModel } from "src/app/models/event.model"

// NPCs
const IA_MERIDIANA_IMAGE: string = "../../assets/images/pnj/AI.webp"

export const lightYearEvents: EventModel[] = [
  {
    eventName: "Mediriana AI",
    dialog:
      "We have reached Extosopia-3. I have sent a signal, we should be contacted by travelling merchants ships soon.",
    eventImage: IA_MERIDIANA_IMAGE,
    rightChoice: {
      text: "Thanks Mediriana.",
      consequence: {},
    },
    leftChoice: {
      text: "Let's move on.",
      consequence: {},
    },
    quest: "EXTOSOPIA",
  },
]
