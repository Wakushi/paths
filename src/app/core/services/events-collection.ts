import { EventModel } from "src/app/models/event.model"

const IA_MERIDIANA_IMAGE: string = "../../assets/images/pnj/rabbit.webp"
const COMMANDANT_THALIA_IMAGE: string = "../../assets/images/pnj/thalia.webp"
const CHRONOMECANICIEN_GRIGGS_IMAGE: string =
  "../../assets/images/pnj/mechanic.webp"
const NAVIGATOR_KASSIOPEIA_IMAGE: string =
  "../../assets/images/pnj/navigator.webp"
const ARCHITECTE_STELLAIRE_ORION_IMAGE: string =
  "../../assets/images/pnj/architect.webp"
const DATA_ARCHIVISTE_ALTAIR_IMAGE: string =
  "../../assets/images/pnj/archivist.webp"
const DOCTEUR_PROXIMA_IMAGE: string = "../../assets/images/pnj/doctor.webp"
const INGENIEUR_ENERGIE_ZOLTAN_IMAGE: string =
  "../../assets/images/pnj/engineer.webp"

export const events: EventModel[] = [
  {
    eventName: "Commandant Thalia",
    dialog: "An asteroid is coming toward us, can I teleport us outta here?",
    eventImage: COMMANDANT_THALIA_IMAGE,
    rightChoice: {
      text: "Sure, let's be safe !",
      consequence: { time: -10, energy: -20 },
    },
    leftChoice: {
      text: "We could waste energy..",
      consequence: { health: -20 },
    },
  },
  {
    eventName: "IA Méridiana",
    dialog:
      "Zoltan is fixing the energy condensator, flux is currently low. What do you want to prioritize ?",
    eventImage: IA_MERIDIANA_IMAGE,
    rightChoice: {
      text: "Time stabilizator !",
      consequence: { time: 10, health: -10, mental: -5 },
    },
    leftChoice: {
      text: "Everything left on the shields !",
      consequence: { health: 10, time: -10, mental: -5 },
    },
  },
  {
    eventName: "Chronomécanicien Griggs",
    dialog:
      "I've been working on some upgrades, which system should I focus on?",
    eventImage: CHRONOMECANICIEN_GRIGGS_IMAGE,
    rightChoice: {
      text: "Upgrade the temporal engine!",
      consequence: { time: 20, energy: -15 },
    },
    leftChoice: {
      text: "Let's reinforce the structural integrity!",
      consequence: { health: 20, mental: -10 },
    },
  },
  {
    eventName: "Commandant Thalia",
    dialog:
      "We've picked up a distress signal. It might be a trap, what's our next move?",
    eventImage: COMMANDANT_THALIA_IMAGE,
    rightChoice: {
      text: "Rescue mission is a go!",
      consequence: { time: -15, energy: -10 },
    },
    leftChoice: {
      text: "Ignore it, can't risk it.",
      consequence: { mental: -10 },
    },
  },
  {
    eventName: "IA Méridiana",
    dialog:
      "Data overload detected. Reallocate resources to prevent a system crash?",
    eventImage: IA_MERIDIANA_IMAGE,
    rightChoice: {
      text: "Divert energy to the shields!",
      consequence: { health: 10, energy: -15, mental: 5 },
    },
    leftChoice: {
      text: "Boost the temporal stabilizers!",
      consequence: { time: 10, energy: -15, mental: 5 },
    },
  },
  {
    eventName: "Chronomécanicien Griggs",
    dialog:
      "The time engine is acting up. I have two potential fixes, which one should I apply?",
    eventImage: CHRONOMECANICIEN_GRIGGS_IMAGE,
    rightChoice: {
      text: "Use the emergency chronal adjuster!",
      consequence: { time: 15, health: -10 },
    },
    leftChoice: {
      text: "Try the temporal resonance compensator!",
      consequence: { time: 15, energy: -10 },
    },
  },
  {
    eventName: "Navigator Kassiopeia",
    dialog:
      "There's a shortcut through the nebula, but it's risky. Your orders, captain?",
    eventImage: NAVIGATOR_KASSIOPEIA_IMAGE,
    rightChoice: {
      text: "Let's take the risk, full speed ahead!",
      consequence: { energy: 20, health: -15, time: 10 },
    },
    leftChoice: {
      text: "No, stay on the current path.",
      consequence: { time: -20 },
    },
  },
  {
    eventName: "Architecte Stellaire Orion",
    dialog:
      "Hull breach detected, but I can only seal it from the outside. Shall I proceed?",
    eventImage: ARCHITECTE_STELLAIRE_ORION_IMAGE,
    rightChoice: {
      text: "Yes, we can't lose pressure.",
      consequence: { health: 20, time: -15, energy: -10 },
    },
    leftChoice: {
      text: "No, find an internal solution.",
      consequence: { health: -15 },
    },
  },
  {
    eventName: "Data Archiviste Altair",
    dialog:
      "I've found a data anomaly, it could either be a glitch or crucial info. What's the protocol?",
    eventImage: DATA_ARCHIVISTE_ALTAIR_IMAGE,
    rightChoice: {
      text: "Investigate, it might be important.",
      consequence: { mental: 10, energy: -5 },
    },
    leftChoice: {
      text: "Ignore, it's probably a glitch.",
      consequence: { mental: -5 },
    },
  },
  {
    eventName: "Docteur Proxima",
    dialog:
      "Crew's morale is low due to extended isolation. Suggest throwing a small party to boost morale.",
    eventImage: DOCTEUR_PROXIMA_IMAGE,
    rightChoice: {
      text: "Sounds fun, let's do it!",
      consequence: { mental: 20, time: -10, energy: -10 },
    },
    leftChoice: {
      text: "We can't afford that, carry on as usual.",
      consequence: { mental: -15 },
    },
  },
  {
    eventName: "Ingénieur en Énergie Zoltan",
    dialog:
      "Energy levels are falling rapidly, do you want me to reroute auxiliary power?",
    eventImage: INGENIEUR_ENERGIE_ZOLTAN_IMAGE,
    rightChoice: {
      text: "Yes, divert power to main systems.",
      consequence: { energy: 15, mental: -5, health: -5 },
    },
    leftChoice: {
      text: "No, conserve power for now.",
      consequence: { energy: -10 },
    },
  },
  {
    eventName: "Navigator Kassiopeia",
    dialog:
      "There's a dimensional storm ahead. Should we navigate through it or wait it out?",
    eventImage: NAVIGATOR_KASSIOPEIA_IMAGE,
    rightChoice: {
      text: "Let's navigate through it carefully!",
      consequence: { energy: 15, time: -10, health: -10 },
    },
    leftChoice: {
      text: "Better safe than sorry, wait it out.",
      consequence: { time: -20 },
    },
  },
  {
    eventName: "Architecte Stellaire Orion",
    dialog:
      "I've found some weak points in our structure, do we have time for repairs?",
    eventImage: ARCHITECTE_STELLAIRE_ORION_IMAGE,
    rightChoice: {
      text: "Start the repairs immediately!",
      consequence: { health: 20, time: -15 },
    },
    leftChoice: {
      text: "We can't afford any downtime, keep going.",
      consequence: { health: -15 },
    },
  },
  {
    eventName: "Data Archiviste Altair",
    dialog:
      "I have been analyzing some interesting data, should I continue or assist Meridiana?",
    eventImage: DATA_ARCHIVISTE_ALTAIR_IMAGE,
    rightChoice: {
      text: "Continue your research, we could use the knowledge.",
      consequence: { mental: 15, energy: -10 },
    },
    leftChoice: {
      text: "Help Meridiana, we need to maintain our coherence.",
      consequence: { mental: 10, time: -5 },
    },
  },
  {
    eventName: "Docteur Proxima",
    dialog:
      "There are signs of a viral infection in the crew, should we go into quarantine?",
    eventImage: DOCTEUR_PROXIMA_IMAGE,
    rightChoice: {
      text: "Yes, health is our top priority.",
      consequence: { health: 20, energy: -10, time: -10 },
    },
    leftChoice: {
      text: "No, we can't afford to slow down. Distribute the antivirals.",
      consequence: { health: -10 },
    },
  },
  {
    eventName: "Ingénieur en Énergie Zoltan",
    dialog:
      "Our energy reserves are being drained by an unknown source. Should I investigate or seal off the reserves?",
    eventImage: INGENIEUR_ENERGIE_ZOLTAN_IMAGE,
    rightChoice: {
      text: "Investigate, we need to find the cause.",
      consequence: { energy: 15, mental: -10, time: -5 },
    },
    leftChoice: {
      text: "Seal the reserves, we can't risk losing more energy.",
      consequence: { energy: -10 },
    },
  },
]
