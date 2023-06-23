import { EventModel } from "src/app/models/event.model"

const ASTEROID_FIELD: string = "../../assets/images/pnj/asteroid-field.webp"
const ASTEROID_FIELD_FAIL: string =
  "../../assets/images/pnj/asteroid-field-fail.webp"
const SKJOLD: string = "../../assets/images/pnj/skjold.webp"
const SKJOLD_INTRO: string = "../../assets/images/pnj/skjold-intro.webp"
const SHIP_ASSET:string = "../../assets/images/pnj/ship-rear.webp"

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
    eventImage: SHIP_ASSET,
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
    eventImage: SHIP_ASSET,
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
    eventImage: SHIP_ASSET,
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
    eventImage: SHIP_ASSET,
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
    eventImage: SHIP_ASSET,
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

export const asteroidEventFail: EventModel = {
  eventName: "Asteroid field",
  dialog:
    "As you barely dodge your third asteroid, a huge piece of rock hurts the haul. You decide to make a turn..",
  eventImage: ASTEROID_FIELD_FAIL,
  rightChoice: {
    text: "Better luck next time...",
    consequence: {},
  },
  leftChoice: {
    text: "That was close..",
    consequence: {},
  },
}

export const skjoldIntroEvents: EventModel[] = [
  {
    eventName: "Skjold : The lost planet",
    dialog:
      "As the ship turns around the last chunk of rock, your sight reaches Skjold, an abandoned planet. You carefully save its position.",
    eventImage: SKJOLD_INTRO,
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

export const skjoldEventsCollection: EventModel[] = [
  {
    eventName: "Skjold Bunker",
    dialog:
      "You stumble accross an old abandoned bunker. It could hold some gear but you hear some creature roaming around..",
    eventImage: SKJOLD,
    rightChoice: {
      text: "Go slowly and prepare to fight..",
      consequence: { time: 5, energy: 10, health: -10 },
    },
    leftChoice: {
      text: "We can't take that risk",
      consequence: { mental: 10 },
    },
  },
  {
    eventName: "Crevasse Crossing",
    dialog:
      "A wide, icy crevasse bars your way. A precariously thin natural bridge is your only option.",
    eventImage: SKJOLD,
    rightChoice: {
      text: "Brace for impact and accelerate across!",
      consequence: { energy: -15, health: -5, time: 5 },
    },
    leftChoice: {
      text: "Turn back and find another route",
      consequence: { time: -20 },
    },
  },
  {
    eventName: "Skjold Debris",
    dialog:
      "You discover a pile of discarded Federation tech. Despite the harsh conditions, it seems salvageable.",
    eventImage: SKJOLD,
    rightChoice: {
      text: "Salvage what you can",
      consequence: { time: -10, energy: 20 },
    },
    leftChoice: {
      text: "Ignore and move on",
      consequence: { mental: 5 },
    },
  },
  {
    eventName: "Alien Encounter",
    dialog:
      "A massive alien creature approaches your position, drawn by the warmth of your ship.",
    eventImage: SKJOLD,
    rightChoice: {
      text: "Fire up the thrusters and make a quick getaway!",
      consequence: { energy: -10, health: -5, time: 5 },
    },
    leftChoice: {
      text: "Switch to low power mode and hope it leaves",
      consequence: { energy: -15, mental: 10 },
    },
  },
  {
    eventName: "Time Sand Deposit",
    dialog:
      "You find a massive deposit of Time Sands. But harvesting it might attract dangerous creatures.",
    eventImage: SKJOLD,
    rightChoice: {
      text: "Harvest the Time Sands",
      consequence: { time: 20, health: -10 },
    },
    leftChoice: {
      text: "Play it safe and leave the deposit",
      consequence: { mental: 10 },
    },
  },
  {
    eventName: "Frozen Laboratory",
    dialog:
      "An old Federation lab frozen in time stands before you. Exploring could yield valuable knowledge but risks exposure to the cold.",
    eventImage: SKJOLD,
    rightChoice: {
      text: "Venture inside the lab",
      consequence: { time: -5, energy: 10, health: -10 },
    },
    leftChoice: {
      text: "Bypass the lab to maintain course",
      consequence: { time: -15 },
    },
  },
  {
    eventName: "Hibernating Creatures",
    dialog:
      "You find a cavern filled with hibernating alien creatures. You could use their bioenergy to charge your batteries.",
    eventImage: SKJOLD,
    rightChoice: {
      text: "Carefully tap into their bioenergy",
      consequence: { energy: 20, health: -5 },
    },
    leftChoice: {
      text: "Best not to disturb nature",
      consequence: { mental: 10 },
    },
  },
  {
    eventName: "Abandoned Ship",
    dialog:
      "You spot an old Federation ship, half-buried in the snow. You could possibly find some usable parts.",
    eventImage: SKJOLD,
    rightChoice: {
      text: "Scavenge the ship for parts",
      consequence: { energy: 10, health: -5, time: -5 },
    },
    leftChoice: {
      text: "Avoid potential dangers and move on",
      consequence: { mental: 5 },
    },
  },
  {
    eventName: "Alien Structure",
    dialog:
      "You come across a bizarre alien structure that seems to resonate with a mysterious energy.",
    eventImage: SKJOLD,
    rightChoice: {
      text: "Investigate the structure",
      consequence: { time: 10, mental: -10, energy: 10 },
    },
    leftChoice: {
      text: "Steer clear of the unknown",
      consequence: { mental: 5 },
    },
  },
  {
    eventName: "Frozen Lake",
    dialog:
      "You spot a vast frozen lake, potentially hiding resources underneath. It's a risky business, but could be rewarding.",
    eventImage: SKJOLD,
    rightChoice: {
      text: "Try to extract resources from the lake",
      consequence: { time: -10, energy: 15, health: -10 },
    },
    leftChoice: {
      text: "Stick to solid ground",
      consequence: { mental: 5 },
    },
  },
  {
    eventName: "Icy Gale",
    dialog: "A sudden icy gale threatens to freeze your ship's systems.",
    eventImage: SKJOLD,
    rightChoice: {
      text: "Power through the storm",
      consequence: { energy: -20, time: 5 },
    },
    leftChoice: {
      text: "Find shelter and wait it out",
      consequence: { time: -10 },
    },
  },
  {
    eventName: "Strange Signal",
    dialog:
      "Your sensors pick up a strange energy signal nearby. Could be a trap, could be valuable tech.",
    eventImage: SKJOLD,
    rightChoice: {
      text: "Investigate the signal",
      consequence: { time: -5, energy: 20, health: -10 },
    },
    leftChoice: {
      text: "Ignore the signal",
      consequence: { mental: 10 },
    },
  },
  {
    eventName: "Hidden Cavern",
    dialog: "You find a hidden cavern that may hold undiscovered resources.",
    eventImage: SKJOLD,
    rightChoice: {
      text: "Explore the cavern",
      consequence: { time: -10, energy: 10, health: -5 },
    },
    leftChoice: {
      text: "Steer clear",
      consequence: { mental: 5 },
    },
  },
  {
    eventName: "Ancient Artifact",
    dialog:
      "You discover an ancient alien artifact, it could provide knowledge but might also attract unwanted attention.",
    eventImage: SKJOLD,
    rightChoice: {
      text: "Study the artifact",
      consequence: { time: 5, mental: -10, energy: 10 },
    },
    leftChoice: {
      text: "Leave it alone",
      consequence: { mental: 5 },
    },
  },
  {
    eventName: "Alien Flora",
    dialog:
      "A patch of alien flora could offer biofuel. But there's something unsettling about them...",
    eventImage: SKJOLD,
    rightChoice: {
      text: "Harvest the flora",
      consequence: { energy: 15, health: -5 },
    },
    leftChoice: {
      text: "Leave the flora undisturbed",
      consequence: { mental: 5 },
    },
  },
  {
    eventName: "Rockslide",
    dialog:
      "A sudden rockslide blocks your path, you'll need to clear it or find another way around.",
    eventImage: SKJOLD,
    rightChoice: {
      text: "Blast through the rockslide",
      consequence: { energy: -20, time: 5 },
    },
    leftChoice: {
      text: "Find a detour",
      consequence: { time: -15 },
    },
  },
  {
    eventName: "Crashed Probe",
    dialog:
      "You stumble upon a crashed Federation probe. It could still hold valuable data.",
    eventImage: SKJOLD,
    rightChoice: {
      text: "Recover data from the probe",
      consequence: { time: -5, energy: 5, mental: 10 },
    },
    leftChoice: {
      text: "Ignore the probe",
      consequence: { mental: -5 },
    },
  },
  {
    eventName: "Stellar Anomaly",
    dialog:
      "Your sensors detect a nearby stellar anomaly. Studying it could yield crucial scientific insights.",
    eventImage: SKJOLD,
    rightChoice: {
      text: "Study the anomaly",
      consequence: { time: -10, mental: 15, health: -10 },
    },
    leftChoice: {
      text: "Avoid the anomaly",
      consequence: { mental: -5 },
    },
  },
  {
    eventName: "Abandoned Outpost",
    dialog:
      "An abandoned Federation outpost appears in the distance. Might hold supplies, but it looks eerily quiet.",
    eventImage: SKJOLD,
    rightChoice: {
      text: "Search the outpost",
      consequence: { time: -5, energy: 15, health: -5 },
    },
    leftChoice: {
      text: "Continue on your current path",
      consequence: { mental: 5 },
    },
  },
  {
    eventName: "Dangerous Terrain",
    dialog:
      "The terrain ahead looks dangerous, but potentially rich in resources.",
    eventImage: SKJOLD,
    rightChoice: {
      text: "Navigate the terrain",
      consequence: { time: -5, health: -15, energy: 20 },
    },
    leftChoice: {
      text: "Avoid the terrain",
      consequence: { mental: 5 },
    },
  },
  {
    eventName: "Frost Storm",
    dialog:
      "A frost storm is fast approaching. Could cause significant damage to the ship.",
    eventImage: SKJOLD,
    rightChoice: {
      text: "Shelter in place and ride out the storm",
      consequence: { energy: -15, time: -5 },
    },
    leftChoice: {
      text: "Push through the storm",
      consequence: { health: -20, time: 10 },
    },
  },
  {
    eventName: "Orbital Debris",
    dialog:
      "Orbital debris from old Federation operations could be a source of energy if collected.",
    eventImage: SKJOLD,
    rightChoice: {
      text: "Attempt to collect the debris",
      consequence: { energy: 20, health: -10 },
    },
    leftChoice: {
      text: "Avoid the debris field",
      consequence: { mental: 5 },
    },
  },
  {
    eventName: "Cave Dwellers",
    dialog:
      "You stumble upon a cave inhabited by strange alien creatures. They could be hostile.",
    eventImage: SKJOLD,
    rightChoice: {
      text: "Attempt to communicate",
      consequence: { mental: 15, health: -5 },
    },
    leftChoice: {
      text: "Avoid the cave and move on",
      consequence: { time: -10 },
    },
  },
  {
    eventName: "Federation Footprints",
    dialog:
      "You find remnants of a Federation encampment. There may be resources left behind.",
    eventImage: SKJOLD,
    rightChoice: {
      text: "Search the encampment",
      consequence: { time: -5, energy: 15 },
    },
    leftChoice: {
      text: "Ignore and keep moving",
      consequence: { mental: -5 },
    },
  },
  {
    eventName: "Starship Wreck",
    dialog:
      "The wreck of a starship lies in the distance. Exploring it could be dangerous.",
    eventImage: SKJOLD,
    rightChoice: {
      text: "Explore the wreck",
      consequence: { health: -10, energy: 20, time: -5 },
    },
    leftChoice: {
      text: "Bypass the wreck",
      consequence: { mental: 5 },
    },
  },
  {
    eventName: "Power Surge",
    dialog:
      "A nearby electric storm could recharge your batteries, but it's very risky.",
    eventImage: SKJOLD,
    rightChoice: {
      text: "Attempt to harvest energy from the storm",
      consequence: { energy: 20, health: -15 },
    },
    leftChoice: {
      text: "Steer clear of the storm",
      consequence: { mental: 5 },
    },
  },
  {
    eventName: "Alien Monolith",
    dialog:
      "A strange monolith stands on the horizon, humming with an unknown energy.",
    eventImage: SKJOLD,
    rightChoice: {
      text: "Investigate the monolith",
      consequence: { time: -10, mental: 20, health: -10 },
    },
    leftChoice: {
      text: "Leave it alone",
      consequence: { mental: -5 },
    },
  },
  {
    eventName: "Federation Cache",
    dialog:
      "You locate a hidden cache left behind by the Federation. It's heavily secured.",
    eventImage: SKJOLD,
    rightChoice: {
      text: "Attempt to open the cache",
      consequence: { time: -10, energy: 20 },
    },
    leftChoice: {
      text: "Leave the cache alone",
      consequence: { mental: 5 },
    },
  },
  {
    eventName: "Temporal Distortion",
    dialog:
      "A nearby temporal distortion could offer insights into time-based technology, but it's dangerous.",
    eventImage: SKJOLD,
    rightChoice: {
      text: "Investigate the distortion",
      consequence: { time: 20, mental: -15, health: -10 },
    },
    leftChoice: {
      text: "Avoid the distortion",
      consequence: { mental: -5 },
    },
  },
  {
    eventName: "Federation SOS",
    dialog:
      "An old SOS signal from a Federation ship resonates through your comms. The source could have supplies.",
    eventImage: SKJOLD,
    rightChoice: {
      text: "Trace the SOS signal",
      consequence: { time: -15, energy: 20, health: -5 },
    },
    leftChoice: {
      text: "Ignore the signal",
      consequence: { mental: 5 },
    },
  },
  {
    eventName: "Alien Nest",
    dialog:
      "You've found a nest of local creatures. They seem non-aggressive but very protective.",
    eventImage: SKJOLD,
    rightChoice: {
      text: "Attempt to retrieve possible resources in the nest",
      consequence: { health: -10, energy: 15 },
    },
    leftChoice: {
      text: "Avoid the nest and its potential threats",
      consequence: { mental: 5 },
    },
  },
  {
    eventName: "Geothermal Vent",
    dialog:
      "A geothermal vent could provide energy but might cause structural damage to your ship.",
    eventImage: SKJOLD,
    rightChoice: {
      text: "Tap the vent for energy",
      consequence: { health: -15, energy: 20 },
    },
    leftChoice: {
      text: "Find another energy source",
      consequence: { mental: 5 },
    },
  },
  {
    eventName: "Wandering Entity",
    dialog:
      "A lone alien entity approaches. It seems curious but not immediately hostile.",
    eventImage: SKJOLD,
    rightChoice: {
      text: "Try to communicate with the entity",
      consequence: { mental: 10, health: -5 },
    },
    leftChoice: {
      text: "Keep your distance and observe",
      consequence: { time: -5 },
    },
  },
  {
    eventName: "Ice Chasm",
    dialog:
      "A vast chasm opens before you. Crossing could save time but may be dangerous.",
    eventImage: SKJOLD,
    rightChoice: {
      text: "Risk it and cross the chasm",
      consequence: { time: 15, health: -20 },
    },
    leftChoice: {
      text: "Find a safer route",
      consequence: { time: -10 },
    },
  },
  {
    eventName: "Alien Beacon",
    dialog:
      "You've detected an active alien beacon. It's broadcasting something, but is it a warning or an invitation?",
    eventImage: SKJOLD,
    rightChoice: {
      text: "Approach and investigate the beacon",
      consequence: { time: -10, mental: 15, energy: -10 },
    },
    leftChoice: {
      text: "Steer clear of potential threats",
      consequence: { mental: 5 },
    },
  },
  {
    eventName: "Meteor Shower",
    dialog:
      "A meteor shower looms ahead. Could contain valuable minerals but poses a substantial risk to the ship.",
    eventImage: SKJOLD,
    rightChoice: {
      text: "Fly through the shower",
      consequence: { health: -20, energy: 20 },
    },
    leftChoice: {
      text: "Avoid the shower",
      consequence: { mental: 5 },
    },
  },
  {
    eventName: "Solar Flares",
    dialog:
      "A nearby star is emitting powerful solar flares. They're dangerous, but they could supercharge your batteries.",
    eventImage: SKJOLD,
    rightChoice: {
      text: "Attempt to harvest energy from the flares",
      consequence: { health: -20, energy: 20 },
    },
    leftChoice: {
      text: "Keep your distance from the star",
      consequence: { mental: 5 },
    },
  },
  {
    eventName: "Federation Ruins",
    dialog:
      "You find the ruins of a Federation science lab. It may hold valuable information but could be booby-trapped.",
    eventImage: SKJOLD,
    rightChoice: {
      text: "Explore the ruins",
      consequence: { time: -10, mental: 20, health: -10 },
    },
    leftChoice: {
      text: "Proceed with caution and avoid the ruins",
      consequence: { mental: -5 },
    },
  },
  {
    eventName: "Alien Fungus",
    dialog:
      "A strange alien fungus covers a nearby area. It could have medicinal properties, but it could also be toxic.",
    eventImage: SKJOLD,
    rightChoice: {
      text: "Collect samples of the fungus",
      consequence: { health: 15, energy: -10 },
    },
    leftChoice: {
      text: "Avoid the unknown fungus",
      consequence: { mental: 5 },
    },
  },
  {
    eventName: "Mysterious Signal",
    dialog:
      "A strange signal echoes through the icy wastes. It could be a trap... or an opportunity.",
    eventImage: SKJOLD,
    rightChoice: {
      text: "Follow the signal",
      consequence: { time: -10, mental: 15, health: -10 },
    },
    leftChoice: {
      text: "Ignore the signal",
      consequence: { mental: -5 },
    },
  },
  {
    eventName: "Aurora Storm",
    dialog:
      "A dazzling aurora lights up the sky, affecting the ship's navigational systems. Ride it out or reroute?",
    eventImage: SKJOLD,
    rightChoice: {
      text: "Ride out the storm",
      consequence: { time: -5, energy: 10 },
    },
    leftChoice: {
      text: "Reroute to avoid the storm",
      consequence: { time: -15 },
    },
  },
  {
    eventName: "Abandoned Mech",
    dialog:
      "You spot an abandoned Federation Mech half-buried in the snow. Could be valuable, could be dangerous.",
    eventImage: SKJOLD,
    rightChoice: {
      text: "Scavenge the Mech",
      consequence: { time: -5, energy: 15, health: -10 },
    },
    leftChoice: {
      text: "Leave the Mech",
      consequence: { mental: 5 },
    },
  },
  {
    eventName: "Frozen Lake",
    dialog:
      "A frozen lake sprawls before you. It might be quicker to cross, but the ice could break...",
    eventImage: SKJOLD,
    rightChoice: {
      text: "Cross the lake",
      consequence: { time: 10, health: -15 },
    },
    leftChoice: {
      text: "Go around the lake",
      consequence: { time: -10 },
    },
  },
  {
    eventName: "Mysterious Object",
    dialog:
      "An object of alien origin pulses with an inner light. Examine it or leave it alone?",
    eventImage: SKJOLD,
    rightChoice: {
      text: "Examine the object",
      consequence: { mental: 20, health: -15 },
    },
    leftChoice: {
      text: "Leave it alone",
      consequence: { mental: -5 },
    },
  },
  {
    eventName: "Cavern Echoes",
    dialog:
      "Echoes from a deep cavern suggest the presence of life. Could be friend or foe...",
    eventImage: SKJOLD,
    rightChoice: {
      text: "Investigate the cavern",
      consequence: { mental: 15, health: -10 },
    },
    leftChoice: {
      text: "Ignore the cavern",
      consequence: { mental: -5 },
    },
  },
  {
    eventName: "Phantom Lights",
    dialog:
      "Ghostly lights dance across the horizon. Is it a natural phenomenon or something more?",
    eventImage: SKJOLD,
    rightChoice: {
      text: "Investigate the lights",
      consequence: { mental: 10, health: -10, energy: 10 },
    },
    leftChoice: {
      text: "Ignore the lights",
      consequence: { mental: -5 },
    },
  },
  {
    eventName: "Crashed Probe",
    dialog:
      "A crashed Federation probe lies in the snow. It might have valuable data, but extracting it could be risky.",
    eventImage: SKJOLD,
    rightChoice: {
      text: "Attempt to retrieve the probe's data",
      consequence: { mental: 15, health: -10 },
    },
    leftChoice: {
      text: "Leave the probe",
      consequence: { mental: 5 },
    },
  },
  {
    eventName: "Time Disturbance",
    dialog:
      "A ripple in the fabric of space-time appears. A chance to save time, but at what cost?",
    eventImage: SKJOLD,
    rightChoice: {
      text: "Navigate through the disturbance",
      consequence: { time: 20, health: -15 },
    },
    leftChoice: {
      text: "Avoid the disturbance",
      consequence: { time: -5 },
    },
  },
  {
    eventName: "Alien Artifact",
    dialog:
      "A strange alien artifact lies half-buried in the ice. Investigate or move on?",
    eventImage: SKJOLD,
    rightChoice: {
      text: "Investigate the artifact",
      consequence: { mental: 20, health: -10 },
    },
    leftChoice: {
      text: "Ignore the artifact",
      consequence: { mental: -5 },
    },
  },
]
