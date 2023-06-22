import { EventModel } from "src/app/models/event.model"

const ASTEROID_FIELD: string = "../../assets/images/pnj/asteroid-field.webp"
const SKJOLD: string = "../../assets/images/pnj/skjold.webp"

export const asteroidSequence: string[] = [
  "left",
  "right",
  "right",
  "left",
  "right",
]

export const skjoldAsteroidEvents: EventModel[] = [
  {
    eventName: "Asteroid field",
    dialog:
      "Your last jump brought your ship to an asteroid field. A huge chunk of rock and metal is hovering toward you. What's your move ?",
    eventImage: ASTEROID_FIELD,
    rightChoice: {
      text: "Buckle-up everyone !",
      consequence: {},
    },
    leftChoice: {
      text: "I'm ready !",
      consequence: {},
    },
    quest: "ASTEROID_FIRST",
  },
  {
    eventName: "Asteroid field",
    dialog: "",
    eventImage: ASTEROID_FIELD,
    rightChoice: {
      text: "Go right",
      consequence: { special: "right" },
    },
    leftChoice: {
      text: "Go left",
      consequence: { special: "left" },
    },
  },
  {
    eventName: "Asteroid field",
    dialog: "",
    eventImage: ASTEROID_FIELD,
    rightChoice: {
      text: "Go right",
      consequence: { special: "right" },
    },
    leftChoice: {
      text: "Go left",
      consequence: { special: "left" },
    },
  },
  {
    eventName: "Asteroid field",
    dialog: "",
    eventImage: ASTEROID_FIELD,
    rightChoice: {
      text: "Go right",
      consequence: { special: "right" },
    },
    leftChoice: {
      text: "Go left",
      consequence: { special: "left" },
    },
  },
  {
    eventName: "Asteroid field",
    dialog: "",
    eventImage: ASTEROID_FIELD,
    rightChoice: {
      text: "Go right",
      consequence: { special: "right" },
    },
    leftChoice: {
      text: "Go left",
      consequence: { special: "left" },
    },
  },
  {
    eventName: "Asteroid field",
    dialog: "",
    eventImage: ASTEROID_FIELD,
    rightChoice: {
      text: "Go right",
      consequence: { special: "right" },
    },
    leftChoice: {
      text: "Go left",
      consequence: { special: "left" },
    },
    quest: "ASTEROID_LAST",
  },
]

export const skjoldIntroEvents: EventModel[] = [
  {
    eventName: "Skjold : The lost planet",
    dialog:
      "As the ship turns around the last chunk of rock, your sight reaches Skjold, an abandoned planet.",
    eventImage: SKJOLD,
    rightChoice: {
      text: "...",
      consequence: {},
    },
    leftChoice: {
      text: "...",
      consequence: {},
    },
    quest: "SKJOLD_INTRO",
  },
]
