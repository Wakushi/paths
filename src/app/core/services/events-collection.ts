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
  {
    eventName: "Chronomécanicien Griggs",
    dialog:
      "Temporal engine stability is decreasing, should I engage the backup chronal buffer?",
    eventImage: CHRONOMECANICIEN_GRIGGS_IMAGE,
    rightChoice: {
      text: "Yes, activate the chronal buffer!",
      consequence: { time: 20, energy: -10 },
    },
    leftChoice: {
      text: "No, let it be for now.",
      consequence: { time: -15 },
    },
  },
  {
    eventName: "IA Méridiana",
    dialog:
      "I've detected a time anomaly. It could be beneficial to investigate, but it will require energy.",
    eventImage: IA_MERIDIANA_IMAGE,
    rightChoice: {
      text: "Investigate the anomaly.",
      consequence: { time: 15, energy: -20, mental: 5 },
    },
    leftChoice: {
      text: "Ignore it, it's too risky.",
      consequence: { mental: -10 },
    },
  },
  {
    eventName: "Commandant Thalia",
    dialog:
      "We are approaching a temporal rift. Shall we adjust our course to avoid it?",
    eventImage: COMMANDANT_THALIA_IMAGE,
    rightChoice: {
      text: "Yes, avoid the rift!",
      consequence: { time: -20, energy: 10 },
    },
    leftChoice: {
      text: "No, pass through it!",
      consequence: { time: 20, health: -20, energy: -20 },
    },
  },
  {
    eventName: "Ingénieur en Énergie Zoltan",
    dialog:
      "There's an energy surge in the temporal engine. Shall I reroute the extra energy?",
    eventImage: INGENIEUR_ENERGIE_ZOLTAN_IMAGE,
    rightChoice: {
      text: "Reroute to shields!",
      consequence: { health: 20, time: -10 },
    },
    leftChoice: {
      text: "Reroute to mental capacity enhancement!",
      consequence: { mental: 20, time: -10 },
    },
  },
  {
    eventName: "Navigator Kassiopeia",
    dialog:
      "We've detected a shortcut through time, but it could destabilize the ship. What's our course of action?",
    eventImage: NAVIGATOR_KASSIOPEIA_IMAGE,
    rightChoice: {
      text: "Take the shortcut!",
      consequence: { time: 30, health: -10, energy: -15 },
    },
    leftChoice: {
      text: "Stay on the current path.",
      consequence: { time: -10 },
    },
  },
  {
    eventName: "Commandant Thalia",
    dialog: "We've stumbled upon an abandoned ship loaded with energy cells.",
    eventImage: COMMANDANT_THALIA_IMAGE,
    rightChoice: {
      text: "Harvest the cells.",
      consequence: { energy: 20, time: -5 },
    },
    leftChoice: {
      text: "Ignore and move on.",
      consequence: {},
    },
  },
  {
    eventName: "IA Méridiana",
    dialog: "Detected an approaching time storm.",
    eventImage: IA_MERIDIANA_IMAGE,
    rightChoice: {
      text: "Adjust shields to withstand it.",
      consequence: { time: 15, energy: -10 },
    },
    leftChoice: {
      text: "Change course to avoid it.",
      consequence: { time: -10 },
    },
  },
  {
    eventName: "Chronomécanicien Griggs",
    dialog: "Identified a potential upgrade in the temporal engine.",
    eventImage: CHRONOMECANICIEN_GRIGGS_IMAGE,
    rightChoice: {
      text: "Apply the upgrade.",
      consequence: { time: 20, energy: -15 },
    },
    leftChoice: {
      text: "Maintain current configuration.",
      consequence: {},
    },
  },
  {
    eventName: "Docteur Proxima",
    dialog:
      "Found a new medicinal herb on the latest planet. Can be useful for enhancing crew's physical health.",
    eventImage: DOCTEUR_PROXIMA_IMAGE,
    rightChoice: {
      text: "Harvest and use it.",
      consequence: { health: 20, time: -5 },
    },
    leftChoice: {
      text: "Leave it, focus on the mission.",
      consequence: {},
    },
  },
  {
    eventName: "Data Archiviste Altair",
    dialog: "Potential breakthrough in understanding a new form of energy.",
    eventImage: DATA_ARCHIVISTE_ALTAIR_IMAGE,
    rightChoice: {
      text: "Pursue the research.",
      consequence: { energy: 20, time: -10, mental: 5 },
    },
    leftChoice: {
      text: "Stick to known energy forms.",
      consequence: { mental: -10 },
    },
  },
  {
    eventName: "Navigator Kassiopeia",
    dialog: "Sensed a shortcut in our journey.",
    eventImage: NAVIGATOR_KASSIOPEIA_IMAGE,
    rightChoice: {
      text: "Take the shortcut.",
      consequence: { time: 15, health: -10 },
    },
    leftChoice: {
      text: "Stick to the current path.",
      consequence: { time: -5 },
    },
  },
  {
    eventName: "Architecte Stellaire Orion",
    dialog:
      "Our current trajectory will take us through a field of space debris.",
    eventImage: ARCHITECTE_STELLAIRE_ORION_IMAGE,
    rightChoice: {
      text: "Activate additional shields.",
      consequence: { health: 10, energy: -10 },
    },
    leftChoice: {
      text: "Change course to avoid it.",
      consequence: { time: -10 },
    },
  },
  {
    eventName: "Ingénieur en Énergie Zoltan",
    dialog: "Extra energy is being wasted. Possible to reroute.",
    eventImage: INGENIEUR_ENERGIE_ZOLTAN_IMAGE,
    rightChoice: {
      text: "Reroute to mental capacity enhancement.",
      consequence: { mental: 20, energy: -10 },
    },
    leftChoice: {
      text: "Let it be.",
      consequence: {},
    },
  },
  {
    eventName: "Commandant Thalia",
    dialog:
      "A mysterious object is floating near the ship. It could contain valuable resources.",
    eventImage: COMMANDANT_THALIA_IMAGE,
    rightChoice: {
      text: "Retrieve the object.",
      consequence: { energy: 15, health: -5 },
    },
    leftChoice: {
      text: "It's not part of our mission. Ignore it.",
      consequence: {},
    },
  },
  {
    eventName: "IA Méridiana",
    dialog:
      "A sudden spike in the temporal matrix could mean a potential time jump.",
    eventImage: IA_MERIDIANA_IMAGE,
    rightChoice: {
      text: "Perform a manual override to stabilize.",
      consequence: { time: 15, mental: -10 },
    },
    leftChoice: {
      text: "Let it pass. It's a normal glitch.",
      consequence: { time: -15 },
    },
  },
  {
    eventName: "Chronomécanicien Griggs",
    dialog:
      "A temporal loophole has been detected. We can exploit it for fast travel.",
    eventImage: CHRONOMECANICIEN_GRIGGS_IMAGE,
    rightChoice: {
      text: "Use the loophole.",
      consequence: { time: 30, energy: -20, health: -10 },
    },
    leftChoice: {
      text: "Stay in normal space-time.",
      consequence: { time: -10 },
    },
  },
  {
    eventName: "Navigator Kassiopeia",
    dialog:
      "Star maps indicate an uncharted planet on our route. It might hold unknown risks.",
    eventImage: NAVIGATOR_KASSIOPEIA_IMAGE,
    rightChoice: {
      text: "Alter course to investigate the planet.",
      consequence: { time: -15, energy: -10, mental: 10 },
    },
    leftChoice: {
      text: "Maintain current course.",
      consequence: {},
    },
  },
  {
    eventName: "Docteur Proxima",
    dialog:
      "A space-borne virus has been detected onboard. We need to act fast.",
    eventImage: DOCTEUR_PROXIMA_IMAGE,
    rightChoice: {
      text: "Initiate the containment protocol.",
      consequence: { health: 20, time: -10 },
    },
    leftChoice: {
      text: "Isolate affected areas and continue the mission.",
      consequence: { health: -20 },
    },
  },
  {
    eventName: "Architecte Stellaire Orion",
    dialog:
      "A nearby star is about to go supernova. We can harness the energy, but it's risky.",
    eventImage: ARCHITECTE_STELLAIRE_ORION_IMAGE,
    rightChoice: {
      text: "Harness the energy.",
      consequence: { energy: 40, health: -20, time: -15 },
    },
    leftChoice: {
      text: "Move away from the star.",
      consequence: { time: -10 },
    },
  },
  {
    eventName: "Data Archiviste Altair",
    dialog:
      "We've detected an ancient data capsule. It could boost Méridiana's abilities.",
    eventImage: DATA_ARCHIVISTE_ALTAIR_IMAGE,
    rightChoice: {
      text: "Integrate the data.",
      consequence: { mental: 20, energy: -10 },
    },
    leftChoice: {
      text: "It's too risky. Leave it.",
      consequence: {},
    },
  },
  {
    eventName: "Ingénieur en Énergie Zoltan",
    dialog:
      "We've got an energy leak in the auxiliary engine. We need to fix it now!",
    eventImage: INGENIEUR_ENERGIE_ZOLTAN_IMAGE,
    rightChoice: {
      text: "Fix it immediately.",
      consequence: { energy: 15, time: -10 },
    },
    leftChoice: {
      text: "We can manage. Fix it later.",
      consequence: { energy: -15 },
    },
  },
  {
    eventName: "Commandant Thalia",
    dialog:
      "There's a strange creature outside. It seems to be attracted to our energy source.",
    eventImage: COMMANDANT_THALIA_IMAGE,
    rightChoice: {
      text: "Try to communicate.",
      consequence: { mental: 10, energy: -5 },
    },
    leftChoice: {
      text: "Ignore it and move on.",
      consequence: {},
    },
  },
  {
    eventName: "IA Méridiana",
    dialog:
      "We've encountered a dimensional rift. We can either navigate around it or go through it.",
    eventImage: IA_MERIDIANA_IMAGE,
    rightChoice: {
      text: "Navigate through it.",
      consequence: { time: 30, energy: -20, health: -15 },
    },
    leftChoice: {
      text: "Go around it.",
      consequence: { time: -10 },
    },
  },
  {
    eventName: "Chronomécanicien Griggs",
    dialog: "A temporal storm is approaching. We need to take action.",
    eventImage: CHRONOMECANICIEN_GRIGGS_IMAGE,
    rightChoice: {
      text: "Activate the temporal shields.",
      consequence: { time: 20, energy: -15 },
    },
    leftChoice: {
      text: "Change the course to avoid the storm.",
      consequence: { time: -15 },
    },
  },
  {
    eventName: "Navigator Kassiopeia",
    dialog: "There's a black hole in our path. We need to change the course.",
    eventImage: NAVIGATOR_KASSIOPEIA_IMAGE,
    rightChoice: {
      text: "Change course immediately.",
      consequence: { time: -10 },
    },
    leftChoice: {
      text: "Use its gravity to boost our speed.",
      consequence: { time: 30, energy: -20, health: -10 },
    },
  },
  {
    eventName: "Docteur Proxima",
    dialog: "The crew is stressed out. We need a break.",
    eventImage: DOCTEUR_PROXIMA_IMAGE,
    rightChoice: {
      text: "Give the crew a day off.",
      consequence: { health: 15, time: -10 },
    },
    leftChoice: {
      text: "The mission must continue.",
      consequence: { health: -10 },
    },
  },
  {
    eventName: "Docteur Proxima",
    dialog: "There's an unidentified disease spreading. We need to quarantine.",
    eventImage: DOCTEUR_PROXIMA_IMAGE,
    rightChoice: {
      text: "Initiate quarantine protocols.",
      consequence: { health: 20, time: -15, energy: -10 },
    },
    leftChoice: {
      text: "Keep working on a cure.",
      consequence: { health: -20 },
    },
  },
  {
    eventName: "IA Méridiana",
    dialog: "I need a system upgrade. It can improve my performance.",
    eventImage: IA_MERIDIANA_IMAGE,
    rightChoice: {
      text: "Proceed with the upgrade.",
      consequence: { mental: 20, time: -10, energy: -10 },
    },
    leftChoice: {
      text: "You're functioning well enough. No need for an upgrade.",
      consequence: {},
    },
  },
]
