import { EventModel } from "src/app/models/event.model"

// NPCs
const IA_MERIDIANA_IMAGE: string = "../../assets/images/pnj/AI.webp"
const COMMANDANT_THALIA_IMAGE: string = "../../assets/images/pnj/thalia.webp"
const CHRONOMECANICIEN_GRIGGS_IMAGE: string =
  "../../assets/images/pnj/mechanic.webp"
const NAVIGATOR_KASSIOPEIA_IMAGE: string =
  "../../assets/images/pnj/navigator.webp"
const ARCHITECTE_STELLAIRE_ORION_IMAGE: string =
  "../../assets/images/pnj/architect.webp"
const DATA_ARCHIVISTE_ALTAIR_IMAGE: string =
  "../../assets/images/pnj/archivist.webp"
const DOCTOR_PROXIMA_IMAGE: string = "../../assets/images/pnj/doctor.webp"
const INGENIEUR_ENERGIE_ZOLTAN_IMAGE: string =
  "../../assets/images/pnj/engineer.webp"

export const basicEventsCollection: EventModel[] = [
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
    eventName: "Mediriana AI",
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
    eventName: "Chronomechanic Griggs",
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
    eventName: "Mediriana AI",
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
    eventName: "Chronomechanic Griggs",
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
    eventName: "Stellar Architect Orion",
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
    eventName: "Data Archivist Altair",
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
    eventName: "Doctor Proxima",
    dialog:
      "Crew's morale is low due to extended isolation. Suggest throwing a small party to boost morale.",
    eventImage: DOCTOR_PROXIMA_IMAGE,
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
    eventName: "Energineer Zoltan",
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
    eventName: "Stellar Architect Orion",
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
    eventName: "Data Archivist Altair",
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
    eventName: "Doctor Proxima",
    dialog:
      "There are signs of a viral infection in the crew, should we go into quarantine?",
    eventImage: DOCTOR_PROXIMA_IMAGE,
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
    eventName: "Energineer Zoltan",
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
    eventName: "Chronomechanic Griggs",
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
    eventName: "Mediriana AI",
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
    eventName: "Energineer Zoltan",
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
      consequence: { time: 20, health: -10, energy: -15 },
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
    eventName: "Mediriana AI",
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
    eventName: "Chronomechanic Griggs",
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
    eventName: "Doctor Proxima",
    dialog:
      "Found a new medicinal herb on the latest planet. Can be useful for enhancing crew's physical health.",
    eventImage: DOCTOR_PROXIMA_IMAGE,
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
    eventName: "Data Archivist Altair",
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
    eventName: "Stellar Architect Orion",
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
    eventName: "Energineer Zoltan",
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
    eventName: "Mediriana AI",
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
    eventName: "Chronomechanic Griggs",
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
    eventName: "Doctor Proxima",
    dialog:
      "A space-borne virus has been detected onboard. We need to act fast.",
    eventImage: DOCTOR_PROXIMA_IMAGE,
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
    eventName: "Stellar Architect Orion",
    dialog:
      "A nearby star is about to go supernova. We can harness the energy, but it's risky.",
    eventImage: ARCHITECTE_STELLAIRE_ORION_IMAGE,
    rightChoice: {
      text: "Harness the energy.",
      consequence: { energy: 20, health: -20, time: -15 },
    },
    leftChoice: {
      text: "Move away from the star.",
      consequence: { time: -10 },
    },
  },
  {
    eventName: "Data Archivist Altair",
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
    eventName: "Energineer Zoltan",
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
    eventName: "Mediriana AI",
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
    eventName: "Chronomechanic Griggs",
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
    eventName: "Doctor Proxima",
    dialog: "The crew is stressed out. We need a break.",
    eventImage: DOCTOR_PROXIMA_IMAGE,
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
    eventName: "Doctor Proxima",
    dialog: "There's an unidentified disease spreading. We need to quarantine.",
    eventImage: DOCTOR_PROXIMA_IMAGE,
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
    eventName: "Mediriana AI",
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
  {
    eventName: "Commandant Thalia",
    dialog:
      "The local inhabitants are offering us a time-warp device. They're asking for energy in return.",
    eventImage: COMMANDANT_THALIA_IMAGE,
    rightChoice: {
      text: "Trade energy for the device.",
      consequence: { time: 20, energy: -20 },
    },
    leftChoice: {
      text: "Politely decline their offer.",
      consequence: {},
    },
  },
  {
    eventName: "Chronomechanic Griggs",
    dialog:
      "We've found a pocket of suspended time. We can harness it, but it could disturb the ship's systems.",
    eventImage: CHRONOMECANICIEN_GRIGGS_IMAGE,
    rightChoice: {
      text: "Harness the suspended time.",
      consequence: { time: 20, energy: -10, mental: -5 },
    },
    leftChoice: {
      text: "Let's not risk it. Leave it be.",
      consequence: {},
    },
  },
  {
    eventName: "Commandant Thalia",
    dialog:
      "A temporal merchant is selling rare Chrono Crystals, which can boost our temporal stability.",
    eventImage: COMMANDANT_THALIA_IMAGE,
    rightChoice: {
      text: "Buy the Chrono Crystals.",
      consequence: { time: 30, energy: -20 },
    },
    leftChoice: {
      text: "We can't afford the trade.",
      consequence: {},
    },
  },
  {
    eventName: "Chronomechanic Griggs",
    dialog:
      "I can recalibrate our time engine, it may increase efficiency, but it's risky.",
    eventImage: CHRONOMECANICIEN_GRIGGS_IMAGE,
    rightChoice: {
      text: "Recalibrate the time engine.",
      consequence: { time: 20, energy: -15, health: -10 },
    },
    leftChoice: {
      text: "It's too risky. Leave it be.",
      consequence: {},
    },
  },
  {
    eventName: "Navigator Kassiopeia",
    dialog: "A temporal shortcut has appeared, but it's quite unstable.",
    eventImage: NAVIGATOR_KASSIOPEIA_IMAGE,
    rightChoice: {
      text: "Take the shortcut.",
      consequence: { time: 20, energy: -20, health: -15 },
    },
    leftChoice: {
      text: "Stay on the current path.",
      consequence: { time: -10 },
    },
  },
  {
    eventName: "Mediriana AI",
    dialog: "Optimizing the AI core could enhance time prediction algorithms.",
    eventImage: IA_MERIDIANA_IMAGE,
    rightChoice: {
      text: "Optimize the AI core.",
      consequence: { time: 20, energy: -15, mental: -5 },
    },
    leftChoice: {
      text: "Maintain current AI core performance.",
      consequence: {},
    },
  },
  {
    eventName: "Commandant Thalia",
    dialog:
      "An ancient time relic has been located. It could boost our temporal stability, but it's guarded by hostile creatures.",
    eventImage: COMMANDANT_THALIA_IMAGE,
    rightChoice: {
      text: "Retrieve the relic.",
      consequence: { time: 30, energy: -20, health: -20 },
    },
    leftChoice: {
      text: "Too dangerous. Leave it be.",
      consequence: {},
    },
  },
  {
    eventName: "Doctor Proxima",
    dialog:
      "The crew is reporting time lapses. We could investigate this anomaly.",
    eventImage: DOCTOR_PROXIMA_IMAGE,
    rightChoice: {
      text: "Investigate the anomaly.",
      consequence: { time: 20, health: -10, energy: -10 },
    },
    leftChoice: {
      text: "Ignore the reports.",
      consequence: { time: -20 },
    },
  },
  {
    eventName: "Mediriana AI",
    dialog:
      "Temporal interference detected. I could recalibrate sensors to minimize impact.",
    eventImage: IA_MERIDIANA_IMAGE,
    rightChoice: {
      text: "Recalibrate the sensors.",
      consequence: { time: 30, energy: -10 },
    },
    leftChoice: {
      text: "Ignore the interference.",
      consequence: { time: -20 },
    },
  },
  {
    eventName: "Chronomechanic Griggs",
    dialog:
      "We can temporarily overclock the time engines for a boost, at the risk of overheating.",
    eventImage: CHRONOMECANICIEN_GRIGGS_IMAGE,
    rightChoice: {
      text: "Overclock the engines.",
      consequence: { time: 20, energy: -20, health: -10 },
    },
    leftChoice: {
      text: "Maintain current engine performance.",
      consequence: {},
    },
  },
  {
    eventName: "Navigator Kassiopeia",
    dialog: "A passing time comet could be harvested for temporal energy.",
    eventImage: NAVIGATOR_KASSIOPEIA_IMAGE,
    rightChoice: {
      text: "Attempt to harvest the comet.",
      consequence: { time: 25, energy: -15 },
    },
    leftChoice: {
      text: "Let the comet pass by.",
      consequence: {},
    },
  },
  {
    eventName: "Doctor Proxima",
    dialog:
      "Studying the effects of local time flora on crew could lead to better temporal stability.",
    eventImage: DOCTOR_PROXIMA_IMAGE,
    rightChoice: {
      text: "Conduct the study.",
      consequence: { time: 15, health: -10 },
    },
    leftChoice: {
      text: "Ignore the local flora.",
      consequence: {},
    },
  },
  {
    eventName: "Commandant Thalia",
    dialog: "Our shields are deteriorating at an alarming rate.",
    eventImage: COMMANDANT_THALIA_IMAGE,
    rightChoice: {
      text: "Divert power to reinforce shields.",
      consequence: { health: 30, energy: -20 },
    },
    leftChoice: {
      text: "Keep power distribution as is.",
      consequence: { health: -20 },
    },
  },
  {
    eventName: "Data Archivist Altair",
    dialog: "There's a network breach. It's affecting Méridiana's operations.",
    eventImage: DATA_ARCHIVISTE_ALTAIR_IMAGE,
    rightChoice: {
      text: "Cut off the network and initiate repair protocol.",
      consequence: { mental: 15, time: -10 },
    },
    leftChoice: {
      text: "Let Méridiana handle it autonomously.",
      consequence: { mental: -15, time: 10 },
    },
  },
  {
    eventName: "Navigator Kassiopeia",
    dialog: "A wormhole appeared on our course. It could lead us off track.",
    eventImage: NAVIGATOR_KASSIOPEIA_IMAGE,
    rightChoice: {
      text: "Enter the wormhole.",
      consequence: { time: 20, mental: -20, health: -10 },
    },
    leftChoice: {
      text: "Steer clear of the wormhole.",
      consequence: { time: -15 },
    },
  },
  {
    eventName: "Mediriana AI",
    dialog: "I would suggest an experimental speed boost of my abilities.",
    eventImage: IA_MERIDIANA_IMAGE,
    rightChoice: {
      text: "Implement the boost.",
      consequence: { mental: 30, energy: -20 },
    },
    leftChoice: {
      text: "Stick to the current ratio.",
      consequence: { mental: -15 },
    },
  },
  {
    eventName: "Chronomechanic Griggs",
    dialog:
      "We're caught in a time dilation field. We can attempt to stabilize it.",
    eventImage: CHRONOMECANICIEN_GRIGGS_IMAGE,
    rightChoice: {
      text: "Attempt stabilization.",
      consequence: { time: 20, energy: -10 },
    },
    leftChoice: {
      text: "Wait for the effect to pass naturally.",
      consequence: { time: -20, mental: 10 },
    },
  },
  {
    eventName: "Navigator Kassiopeia",
    dialog:
      "An energy-rich asteroid field is on our route. Harvesting may delay us.",
    eventImage: NAVIGATOR_KASSIOPEIA_IMAGE,
    rightChoice: {
      text: "Alter course to harvest the asteroids.",
      consequence: { time: -15, energy: 20 },
    },
    leftChoice: {
      text: "Maintain current course.",
      consequence: {},
    },
  },
  {
    eventName: "Doctor Proxima",
    dialog: "I can recalibrate the med-bay to produce some extra energy.",
    eventImage: DOCTOR_PROXIMA_IMAGE,
    rightChoice: {
      text: "Recalibrate the med-bay.",
      consequence: { health: -10, energy: 15 },
    },
    leftChoice: {
      text: "Keep the med-bay focused on health.",
      consequence: {},
    },
  },
  {
    eventName: "Stellar Architect Orion",
    dialog:
      "There are residual energy traces in a nearby nebula. It's safe to collect.",
    eventImage: ARCHITECTE_STELLAIRE_ORION_IMAGE,
    rightChoice: {
      text: "Collect the energy traces.",
      consequence: { energy: 20, time: -10 },
    },
    leftChoice: {
      text: "Ignore the nebula.",
      consequence: {},
    },
  },
  {
    eventName: "Data Archivist Altair",
    dialog: "Unused data packets can be converted into energy.",
    eventImage: DATA_ARCHIVISTE_ALTAIR_IMAGE,
    rightChoice: {
      text: "Convert the data packets.",
      consequence: { mental: -5, energy: 10 },
    },
    leftChoice: {
      text: "Keep the data as is.",
      consequence: {},
    },
  },
  {
    eventName: "Energineer Zoltan",
    dialog:
      "We can optimize energy use by diverting from non-critical systems.",
    eventImage: INGENIEUR_ENERGIE_ZOLTAN_IMAGE,
    rightChoice: {
      text: "Optimize energy use.",
      consequence: { energy: 15 },
    },
    leftChoice: {
      text: "Keep energy distribution as is.",
      consequence: { mental: -10 },
    },
  },
  {
    eventName: "Commandant Thalia",
    dialog: "We can convert some auxiliary systems to produce more energy.",
    eventImage: COMMANDANT_THALIA_IMAGE,
    rightChoice: {
      text: "Convert the systems.",
      consequence: { energy: 10, health: -5 },
    },
    leftChoice: {
      text: "Keep auxiliary systems as they are.",
      consequence: {},
    },
  },
  {
    eventName: "Mediriana AI",
    dialog: "Unallocated processing power can be converted into energy.",
    eventImage: IA_MERIDIANA_IMAGE,
    rightChoice: {
      text: "Convert processing power.",
      consequence: { energy: 15, mental: -10 },
    },
    leftChoice: {
      text: "Keep processing power as it is.",
      consequence: {},
    },
  },
  {
    eventName: "Chronomechanic Griggs",
    dialog: "Chrono-batteries can be charged with the temporal field's energy.",
    eventImage: CHRONOMECANICIEN_GRIGGS_IMAGE,
    rightChoice: {
      text: "Charge the batteries.",
      consequence: { energy: 20, time: -10 },
    },
    leftChoice: {
      text: "Avoid interaction with the field.",
      consequence: {},
    },
  },
  {
    eventName: "Navigator Kassiopeia",
    dialog:
      "A nearby star emits substantial solar wind. We could harvest this energy.",
    eventImage: NAVIGATOR_KASSIOPEIA_IMAGE,
    rightChoice: {
      text: "Harvest the solar wind.",
      consequence: { energy: 25, time: -15 },
    },
    leftChoice: {
      text: "Maintain current course.",
      consequence: {},
    },
  },
  {
    eventName: "Doctor Proxima",
    dialog: "If we reduce life-support to minimal, we could save some energy.",
    eventImage: DOCTOR_PROXIMA_IMAGE,
    rightChoice: {
      text: "Reduce life-support.",
      consequence: { energy: 15, health: -20 },
    },
    leftChoice: {
      text: "Keep life-support at current levels.",
      consequence: {},
    },
  },
  {
    eventName: "Stellar Architect Orion",
    dialog:
      "A nearby white dwarf is emitting a significant amount of fusion energy.",
    eventImage: ARCHITECTE_STELLAIRE_ORION_IMAGE,
    rightChoice: {
      text: "Capture the energy emission.",
      consequence: { energy: 30, time: -20 },
    },
    leftChoice: {
      text: "Steer clear of the white dwarf.",
      consequence: { time: -10 },
    },
  },
  {
    eventName: "Data Archivist Altair",
    dialog: "Turning off long-term data storage will conserve a lot of energy.",
    eventImage: DATA_ARCHIVISTE_ALTAIR_IMAGE,
    rightChoice: {
      text: "Turn off long-term storage.",
      consequence: { energy: 15, mental: -20 },
    },
    leftChoice: {
      text: "Keep long-term storage active.",
      consequence: {},
    },
  },
  {
    eventName: "Energineer Zoltan",
    dialog:
      "The secondary power generator is under-utilized. Activating it will increase our energy reserves.",
    eventImage: INGENIEUR_ENERGIE_ZOLTAN_IMAGE,
    rightChoice: {
      text: "Activate the secondary generator.",
      consequence: { energy: 20 },
    },
    leftChoice: {
      text: "Continue with the primary generator.",
      consequence: { energy: -10 },
    },
  },
  {
    eventName: "Commandant Thalia",
    dialog:
      "The mess hall's lights are on all the time. Turning them off when not in use can save energy.",
    eventImage: COMMANDANT_THALIA_IMAGE,
    rightChoice: {
      text: "Turn off the lights.",
      consequence: { energy: 5, mental: -5 },
    },
    leftChoice: {
      text: "Keep the lights on.",
      consequence: {},
    },
  },
  {
    eventName: "Mediriana AI",
    dialog:
      "Less essential AI functions can be temporarily shut down for an energy boost.",
    eventImage: IA_MERIDIANA_IMAGE,
    rightChoice: {
      text: "Shut down non-essential AI functions.",
      consequence: { energy: 10, mental: -5 },
    },
    leftChoice: {
      text: "Keep AI functions as is.",
      consequence: {},
    },
  },
  {
    eventName: "Chronomechanic Griggs",
    dialog:
      "A time vortex is nearby. We can gain energy from its temporal distortions.",
    eventImage: CHRONOMECANICIEN_GRIGGS_IMAGE,
    rightChoice: {
      text: "Approach the vortex cautiously.",
      consequence: { energy: 20, time: -15, health: -10 },
    },
    leftChoice: {
      text: "Avoid the vortex.",
      consequence: { time: -10 },
    },
  },
  {
    eventName: "Navigator Kassiopeia",
    dialog:
      "Flying closer to a star will allow our solar panels to absorb more energy.",
    eventImage: NAVIGATOR_KASSIOPEIA_IMAGE,
    rightChoice: {
      text: "Fly closer to the star.",
      consequence: { energy: 30, health: -20 },
    },
    leftChoice: {
      text: "Keep current distance from the star.",
      consequence: { time: -5 },
    },
  },
  {
    eventName: "Doctor Proxima",
    dialog:
      "By temporarily reducing life support to non-essential areas, we can conserve energy.",
    eventImage: DOCTOR_PROXIMA_IMAGE,
    rightChoice: {
      text: "Reduce life support in non-essential areas.",
      consequence: { energy: 15, health: -10 },
    },
    leftChoice: {
      text: "Maintain current life support settings.",
      consequence: {},
    },
  },
  {
    eventName: "Stellar Architect Orion",
    dialog:
      "A pulsar nearby is emitting strong waves of radiation, which can be converted into energy.",
    eventImage: ARCHITECTE_STELLAIRE_ORION_IMAGE,
    rightChoice: {
      text: "Convert radiation into energy.",
      consequence: { energy: 30, health: -15 },
    },
    leftChoice: {
      text: "Keep away from the pulsar.",
      consequence: { time: -10 },
    },
  },
  {
    eventName: "Data Archivist Altair",
    dialog: "Less essential data archives can be erased to save energy.",
    eventImage: DATA_ARCHIVISTE_ALTAIR_IMAGE,
    rightChoice: {
      text: "Erase less essential archives.",
      consequence: { energy: 10, mental: -15 },
    },
    leftChoice: {
      text: "Keep data archives as they are.",
      consequence: {},
    },
  },
  {
    eventName: "Navigator Kassiopeia",
    dialog:
      "We can utilize the gravitational slingshot effect around a nearby gas giant to save energy.",
    eventImage: NAVIGATOR_KASSIOPEIA_IMAGE,
    rightChoice: {
      text: "Use the gravitational slingshot.",
      consequence: { energy: 20, time: -15 },
    },
    leftChoice: {
      text: "Keep current course.",
      consequence: { time: -10 },
    },
  },
  {
    eventName: "Doctor Proxima",
    dialog: "Initiating a crew-wide health fast could save significant energy.",
    eventImage: DOCTOR_PROXIMA_IMAGE,
    rightChoice: {
      text: "Initiate the health fast.",
      consequence: { energy: 15, health: -10 },
    },
    leftChoice: {
      text: "Maintain normal diet.",
      consequence: {},
    },
  },
  {
    eventName: "Stellar Architect Orion",
    dialog:
      "An incoming solar flare can be harnessed for energy, but it might affect crew health.",
    eventImage: ARCHITECTE_STELLAIRE_ORION_IMAGE,
    rightChoice: {
      text: "Harness the solar flare.",
      consequence: { energy: 20, health: -20 },
    },
    leftChoice: {
      text: "Take evasive action.",
      consequence: { time: -5 },
    },
  },
  {
    eventName: "Data Archivist Altair",
    dialog:
      "A data defragmentation can free up system resources and save energy.",
    eventImage: DATA_ARCHIVISTE_ALTAIR_IMAGE,
    rightChoice: {
      text: "Initiate defragmentation.",
      consequence: { energy: 10, time: -5 },
    },
    leftChoice: {
      text: "Skip defragmentation.",
      consequence: {},
    },
  },
  {
    eventName: "Energineer Zoltan",
    dialog: "An unexploited quantum energy field has been detected nearby.",
    eventImage: INGENIEUR_ENERGIE_ZOLTAN_IMAGE,
    rightChoice: {
      text: "Exploit the quantum field.",
      consequence: { energy: 20, time: -20 },
    },
    leftChoice: {
      text: "Ignore the quantum field.",
      consequence: { time: -5 },
    },
  },
  {
    eventName: "Commandant Thalia",
    dialog: "Turning off non-essential ship lights can save energy.",
    eventImage: COMMANDANT_THALIA_IMAGE,
    rightChoice: {
      text: "Turn off non-essential lights.",
      consequence: { energy: 5 },
    },
    leftChoice: {
      text: "Keep the lights on.",
      consequence: { energy: -5 },
    },
  },
  {
    eventName: "Mediriana AI",
    dialog:
      "Reducing my processing power can conserve energy, but it will affect overall performance.",
    eventImage: IA_MERIDIANA_IMAGE,
    rightChoice: {
      text: "Reduce AI processing power.",
      consequence: { energy: 10, mental: -10 },
    },
    leftChoice: {
      text: "Keep AI processing power at current level.",
      consequence: {},
    },
  },
  {
    eventName: "Chronomechanic Griggs",
    dialog:
      "A temporal rift is emitting tachyon particles which can be converted into energy.",
    eventImage: CHRONOMECANICIEN_GRIGGS_IMAGE,
    rightChoice: {
      text: "Convert tachyon particles into energy.",
      consequence: { energy: 25, health: -10 },
    },
    leftChoice: {
      text: "Avoid the temporal rift.",
      consequence: { time: -10 },
    },
  },
  {
    eventName: "Navigator Kassiopeia",
    dialog:
      "We can utilize the gravitational slingshot effect around a nearby gas giant to save energy.",
    eventImage: NAVIGATOR_KASSIOPEIA_IMAGE,
    rightChoice: {
      text: "Use the gravitational slingshot.",
      consequence: { energy: 20, time: -15 },
    },
    leftChoice: {
      text: "Keep current course.",
      consequence: { time: -10 },
    },
  },
  {
    eventName: "Doctor Proxima",
    dialog: "Initiating a crew-wide health fast could save significant energy.",
    eventImage: DOCTOR_PROXIMA_IMAGE,
    rightChoice: {
      text: "Initiate the health fast.",
      consequence: { energy: 15, health: -10 },
    },
    leftChoice: {
      text: "Maintain normal diet.",
      consequence: {},
    },
  },
  {
    eventName: "Stellar Architect Orion",
    dialog:
      "An incoming solar flare can be harnessed for energy, but it might affect crew health.",
    eventImage: ARCHITECTE_STELLAIRE_ORION_IMAGE,
    rightChoice: {
      text: "Harness the solar flare.",
      consequence: { energy: 30, health: -20 },
    },
    leftChoice: {
      text: "Take evasive action.",
      consequence: { time: -15 },
    },
  },
  {
    eventName: "Data Archivist Altair",
    dialog:
      "A data defragmentation can free up system resources and save energy.",
    eventImage: DATA_ARCHIVISTE_ALTAIR_IMAGE,
    rightChoice: {
      text: "Initiate defragmentation.",
      consequence: { energy: 10, time: -5 },
    },
    leftChoice: {
      text: "Skip defragmentation.",
      consequence: {},
    },
  },
  {
    eventName: "Energineer Zoltan",
    dialog: "An unexploited quantum energy field has been detected nearby.",
    eventImage: INGENIEUR_ENERGIE_ZOLTAN_IMAGE,
    rightChoice: {
      text: "Exploit the quantum field.",
      consequence: { energy: 20, time: -20 },
    },
    leftChoice: {
      text: "Ignore the quantum field.",
      consequence: { time: -5 },
    },
  },
  {
    eventName: "Commandant Thalia",
    dialog: "Turning off non-essential ship lights can save energy.",
    eventImage: COMMANDANT_THALIA_IMAGE,
    rightChoice: {
      text: "Turn off non-essential lights.",
      consequence: { energy: 5 },
    },
    leftChoice: {
      text: "Keep the lights on.",
      consequence: { energy: -5 },
    },
  },
  {
    eventName: "Mediriana AI",
    dialog:
      "Reducing my processing power can conserve energy, but it will affect overall performance.",
    eventImage: IA_MERIDIANA_IMAGE,
    rightChoice: {
      text: "Reduce AI processing power.",
      consequence: { energy: 10, mental: -10 },
    },
    leftChoice: {
      text: "Keep AI processing power at current level.",
      consequence: {},
    },
  },
  {
    eventName: "Chronomechanic Griggs",
    dialog:
      "A temporal rift is emitting tachyon particles which can be converted into energy.",
    eventImage: CHRONOMECANICIEN_GRIGGS_IMAGE,
    rightChoice: {
      text: "Convert tachyon particles into energy.",
      consequence: { energy: 25, health: -10 },
    },
    leftChoice: {
      text: "Avoid the temporal rift.",
      consequence: { time: -10 },
    },
  },
  {
    eventName: "Navigator Kassiopeia",
    dialog:
      "An uncharted quantum tunnel could get us to our destination faster and save energy.",
    eventImage: NAVIGATOR_KASSIOPEIA_IMAGE,
    rightChoice: {
      text: "Go through the quantum tunnel.",
      consequence: { energy: 20, time: 10, health: -10 },
    },
    leftChoice: {
      text: "Avoid the quantum tunnel.",
      consequence: { time: -10 },
    },
  },
  {
    eventName: "Doctor Proxima",
    dialog:
      "Using bioluminescent bacteria instead of regular lights in some areas could save energy.",
    eventImage: DOCTOR_PROXIMA_IMAGE,
    rightChoice: {
      text: "Implement the bioluminescent bacteria.",
      consequence: { energy: 5 },
    },
    leftChoice: {
      text: "Keep using regular lights.",
      consequence: {},
    },
  },
  {
    eventName: "Energineer Zoltan",
    dialog:
      "Converting waste heat to energy is possible with our current setup.",
    eventImage: INGENIEUR_ENERGIE_ZOLTAN_IMAGE,
    rightChoice: {
      text: "Start the heat conversion.",
      consequence: { energy: 10, health: 5 },
    },
    leftChoice: {
      text: "Ignore the waste heat.",
      consequence: { energy: -5 },
    },
  },
  {
    eventName: "Commandant Thalia",
    dialog: "Hyperdrive can be overclocked for increased speed.",
    eventImage: COMMANDANT_THALIA_IMAGE,
    rightChoice: {
      text: "Overclock the hyperdrive.",
      consequence: { time: 15, health: 5 },
    },
    leftChoice: {
      text: "Hyperdrive stays normal.",
      consequence: { time: -10 },
    },
  },
  {
    eventName: "Mediriana AI",
    dialog: "The crew can be given health boosters for increased resilience.",
    eventImage: IA_MERIDIANA_IMAGE,
    rightChoice: {
      text: "Administer health boosters.",
      consequence: { health: 15, energy: -5 },
    },
    leftChoice: {
      text: "Decline health boosters.",
      consequence: { health: -10 },
    },
  },
  {
    eventName: "Chronomechanic Griggs",
    dialog:
      "The ship's reactor can be modified to produce additional time flux.",
    eventImage: CHRONOMECANICIEN_GRIGGS_IMAGE,
    rightChoice: {
      text: "Modify the reactor.",
      consequence: { time: 10, health: 5 },
    },
    leftChoice: {
      text: "Leave the reactor as is.",
      consequence: { time: -10 },
    },
  },
  {
    eventName: "Navigator Kassiopeia",
    dialog: "A giant gas cloud can be utilized to boost our health reserves.",
    eventImage: NAVIGATOR_KASSIOPEIA_IMAGE,
    rightChoice: {
      text: "Enter the gas cloud.",
      consequence: { health: 20, time: -5 },
    },
    leftChoice: {
      text: "Avoid the gas cloud.",
      consequence: { health: -5 },
    },
  },
  {
    eventName: "Doctor Proxima",
    dialog: "We can perform a complete health check-up to improve crew health.",
    eventImage: DOCTOR_PROXIMA_IMAGE,
    rightChoice: {
      text: "Perform health check-up.",
      consequence: { health: 15, time: -10 },
    },
    leftChoice: {
      text: "Ignore the health check-up.",
      consequence: { health: -10 },
    },
  },
  {
    eventName: "Energineer Zoltan",
    dialog: "An external energy source detected. We can harness it.",
    eventImage: INGENIEUR_ENERGIE_ZOLTAN_IMAGE,
    rightChoice: {
      text: "Harness the energy source.",
      consequence: { energy: 20, health: 5 },
    },
    leftChoice: {
      text: "Ignore the energy source.",
      consequence: { energy: -15 },
    },
  },
  {
    eventName: "Commandant Thalia",
    dialog: "We've found a planet with edible plant life. We can harvest them.",
    eventImage: COMMANDANT_THALIA_IMAGE,
    rightChoice: {
      text: "Harvest the plants.",
      consequence: { health: 15, time: -10 },
    },
    leftChoice: {
      text: "Continue the journey.",
      consequence: { health: -5 },
    },
  },
  {
    eventName: "Mediriana AI",
    dialog: "We can reroute non-essential power to the medical bay.",
    eventImage: IA_MERIDIANA_IMAGE,
    rightChoice: {
      text: "Reroute the power.",
      consequence: { health: 20, energy: -10 },
    },
    leftChoice: {
      text: "Keep power allocation.",
      consequence: { energy: -5 },
    },
  },
  {
    eventName: "Chronomechanic Griggs",
    dialog: "Chrono-turbines can improve health by altering biological time.",
    eventImage: CHRONOMECANICIEN_GRIGGS_IMAGE,
    rightChoice: {
      text: "Activate the chrono-turbines.",
      consequence: { health: 15, time: -15 },
    },
    leftChoice: {
      text: "Chrono-turbines stay off.",
      consequence: { health: -10 },
    },
  },
  {
    eventName: "Navigator Kassiopeia",
    dialog: "An uncharted planet has natural healing springs.",
    eventImage: NAVIGATOR_KASSIOPEIA_IMAGE,
    rightChoice: {
      text: "Visit the healing springs.",
      consequence: { health: 15, time: -10 },
    },
    leftChoice: {
      text: "Maintain course.",
      consequence: { health: -5 },
    },
  },
  {
    eventName: "Doctor Proxima",
    dialog: "Utilize our medical nanobots to enhance crew's health.",
    eventImage: DOCTOR_PROXIMA_IMAGE,
    rightChoice: {
      text: "Deploy nanobots.",
      consequence: { health: 20, energy: -10 },
    },
    leftChoice: {
      text: "Keep nanobots on standby.",
      consequence: { health: -10 },
    },
  },
  {
    eventName: "Energineer Zoltan",
    dialog: "We can improve life support systems efficiency.",
    eventImage: INGENIEUR_ENERGIE_ZOLTAN_IMAGE,
    rightChoice: {
      text: "Enhance the life support systems.",
      consequence: { health: 15, energy: -5 },
    },
    leftChoice: {
      text: "Life support systems are fine as they are.",
      consequence: { health: -5 },
    },
  },
  {
    eventName: "Commandant Thalia",
    dialog: "The crew could use some R&R. A short break would be beneficial.",
    eventImage: COMMANDANT_THALIA_IMAGE,
    rightChoice: {
      text: "Authorize the break.",
      consequence: { health: 10, time: -15 },
    },
    leftChoice: {
      text: "Continue without a break.",
      consequence: { health: -5 },
    },
  },
  {
    eventName: "Mediriana AI",
    dialog: "Crew's health can be improved by enhancing sleep cycles.",
    eventImage: IA_MERIDIANA_IMAGE,
    rightChoice: {
      text: "Enhance sleep cycles.",
      consequence: { health: 15, time: -5 },
    },
    leftChoice: {
      text: "Maintain current sleep cycles.",
      consequence: { health: -10 },
    },
  },
  {
    eventName: "Chronomechanic Griggs",
    dialog:
      "A slight alteration in temporal phase could boost the crew's health.",
    eventImage: CHRONOMECANICIEN_GRIGGS_IMAGE,
    rightChoice: {
      text: "Alter temporal phase.",
      consequence: { health: 20, time: -15 },
    },
    leftChoice: {
      text: "Temporal phase stays stable.",
      consequence: { health: -10 },
    },
  },
  {
    eventName: "Navigator Kassiopeia",
    dialog:
      "A cosmic storm ahead can be used for a health boost with proper shielding.",
    eventImage: NAVIGATOR_KASSIOPEIA_IMAGE,
    rightChoice: {
      text: "Brace for the storm.",
      consequence: { health: 20, energy: -10 },
    },
    leftChoice: {
      text: "Avoid the storm.",
      consequence: { health: -10 },
    },
  },
  {
    eventName: "Doctor Proxima",
    dialog:
      "Crew's health can be improved by optimizing diet with synthesized nutrients.",
    eventImage: DOCTOR_PROXIMA_IMAGE,
    rightChoice: {
      text: "Optimize the diet.",
      consequence: { health: 10, energy: -5 },
    },
    leftChoice: {
      text: "Maintain the current diet.",
      consequence: { health: -5 },
    },
  },
  {
    eventName: "Energineer Zoltan",
    dialog: "Can recycle used energy cells to generate health-boosting field.",
    eventImage: INGENIEUR_ENERGIE_ZOLTAN_IMAGE,
    rightChoice: {
      text: "Recycle the energy cells.",
      consequence: { health: 15, energy: -10 },
    },
    leftChoice: {
      text: "Keep energy cells.",
      consequence: { health: -10 },
    },
  },
  {
    eventName: "Commandant Thalia",
    dialog: "A nearby nebula has therapeutic radiation for health improvement.",
    eventImage: COMMANDANT_THALIA_IMAGE,
    rightChoice: {
      text: "Navigate through the nebula.",
      consequence: { health: 20, time: -15 },
    },
    leftChoice: {
      text: "Avoid the nebula.",
      consequence: { health: -10 },
    },
  },
  {
    eventName: "Energineer Zoltan",
    dialog:
      "We have a chance to fine-tune the ship's AI for better efficiency.",
    eventImage: INGENIEUR_ENERGIE_ZOLTAN_IMAGE,
    rightChoice: {
      text: "Fine-tune the AI.",
      consequence: { mental: 10, energy: -5 },
    },
    leftChoice: {
      text: "Leave the AI settings as is.",
      consequence: { mental: -10 },
    },
  },
  {
    eventName: "Mediriana AI",
    dialog:
      "A forced system reboot can refresh and optimize cognitive functions.",
    eventImage: IA_MERIDIANA_IMAGE,
    rightChoice: {
      text: "Initiate a system reboot.",
      consequence: { mental: 15, energy: -10 },
    },
    leftChoice: {
      text: "Skip the reboot.",
      consequence: { mental: -15 },
    },
  },
  {
    eventName: "Chronomechanic Griggs",
    dialog:
      "A synchronization with the temporal field can enhance mental processing.",
    eventImage: CHRONOMECANICIEN_GRIGGS_IMAGE,
    rightChoice: {
      text: "Sync with the temporal field.",
      consequence: { mental: 20, time: -10 },
    },
    leftChoice: {
      text: "Keep current synchronization.",
      consequence: { mental: -10 },
    },
  },
  {
    eventName: "Docteur Proxima",
    dialog: "We can implement cognitive exercises to improve mental wellbeing.",
    eventImage: DOCTOR_PROXIMA_IMAGE,
    rightChoice: {
      text: "Implement cognitive exercises.",
      consequence: { mental: 15, time: -5 },
    },
    leftChoice: {
      text: "Ignore the suggestion.",
      consequence: { mental: -10 },
    },
  },
  {
    eventName: "Commandant Thalia",
    dialog: "Implementing a relaxation protocol can improve mental states.",
    eventImage: COMMANDANT_THALIA_IMAGE,
    rightChoice: {
      text: "Start the relaxation protocol.",
      consequence: { mental: 20, time: -5 },
    },
    leftChoice: {
      text: "Stick to the usual routine.",
      consequence: { mental: -15 },
    },
  },
  {
    eventName: "Navigator Kassiopeia",
    dialog:
      "Navigating through a nebula can cause a mental strain on the crew.",
    eventImage: NAVIGATOR_KASSIOPEIA_IMAGE,
    rightChoice: {
      text: "Navigate through the nebula.",
      consequence: { mental: -20, time: 10 },
    },
    leftChoice: {
      text: "Avoid the nebula.",
      consequence: {},
    },
  },
  {
    eventName: "Energineer Zoltan",
    dialog: "Maintenance of the ship's AI can briefly reduce mental capacity.",
    eventImage: INGENIEUR_ENERGIE_ZOLTAN_IMAGE,
    rightChoice: {
      text: "Perform AI maintenance.",
      consequence: { mental: -15, energy: 10 },
    },
    leftChoice: {
      text: "Postpone maintenance.",
      consequence: { mental: 10 },
    },
  },
  {
    eventName: "Mediriana AI",
    dialog:
      "An upgrade to the AI system could temporarily disrupt mental functions.",
    eventImage: IA_MERIDIANA_IMAGE,
    rightChoice: {
      text: "Proceed with the upgrade.",
      consequence: { mental: -20, time: 15 },
    },
    leftChoice: {
      text: "Delay the upgrade.",
      consequence: { mental: 10 },
    },
  },
  {
    eventName: "Chronomechanic Griggs",
    dialog: "Overuse of temporal adjustments can cause mental fatigue.",
    eventImage: CHRONOMECANICIEN_GRIGGS_IMAGE,
    rightChoice: {
      text: "Continue using temporal adjustments.",
      consequence: { mental: -20, time: 20 },
    },
    leftChoice: {
      text: "Minimize the use of temporal adjustments.",
      consequence: { mental: 15 },
    },
  },
  {
    eventName: "Commandant Thalia",
    dialog:
      "Intense space training can strengthen mental resilience but it's tiring.",
    eventImage: COMMANDANT_THALIA_IMAGE,
    rightChoice: {
      text: "Implement intense space training.",
      consequence: { mental: 20, energy: -15 },
    },
    leftChoice: {
      text: "Maintain regular training schedule.",
      consequence: { mental: -5 },
    },
  },
]
