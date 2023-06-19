import { EventModel } from "src/app/models/event.model"

// NPCs
const IA_MERIDIANA_IMAGE: string = "../../assets/images/pnj/AI.webp"

export const introEventsCollection: EventModel[] = [
  {
    eventName: "Mediriana AI",
    dialog: "Finally, you've waken up..",
    eventImage: IA_MERIDIANA_IMAGE,
    rightChoice: {
      text: "...",
      consequence: {},
    },
    leftChoice: {
      text: "...",
      consequence: {},
    },
  },
  {
    eventName: "Mediriana AI",
    dialog: "Welcome back captain, how are you feeling ?",
    eventImage: IA_MERIDIANA_IMAGE,
    rightChoice: {
      text: "What the.. ? ",
      consequence: {},
    },
    leftChoice: {
      text: "Where are we.. ?",
      consequence: {},
    },
  },
  {
    eventName: "Mediriana AI",
    dialog:
      "We've extracted from the Mokla mothership, but we lost our communications and our temporal propulsor..",
    eventImage: IA_MERIDIANA_IMAGE,
    rightChoice: {
      text: "This is bad...",
      consequence: {},
    },
    leftChoice: {
      text: "At least we're alive...",
      consequence: {},
    },
  },
  {
    eventName: "Mediriana AI",
    dialog:
      "We're stranded in this timeline, and Mokla have sent fighters to track us. We have to make the repairs and find help.",
    eventImage: IA_MERIDIANA_IMAGE,
    rightChoice: {
      text: "What should I do first ?",
      consequence: {},
    },
    leftChoice: {
      text: "Where are we headed ?",
      consequence: {},
    },
  },
  {
    eventName: "Mediriana AI",
    dialog:
      "Commandant Thalia and the crew are waiting for your help. Remember that your next moves will have concrete consequences.",
    eventImage: IA_MERIDIANA_IMAGE,
    rightChoice: {
      text: "Thanks Mediriana, keep an eye on the situation.",
      consequence: {},
    },
    leftChoice: {
      text: "I'll go help them.",
      consequence: {},
    },
    quest: "INTRO_END",
  },
]
