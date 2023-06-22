import { EventModel } from "src/app/models/event.model"

// NPCs
const EXTOSOPIA_MERCHANT: string =
  "../../assets/images/pnj/extosopia-merchant.webp"
const EXTOSOPIA_CARTOGRAPHER: string =
  "../../assets/images/pnj/extosopia-cartographer.webp"
const EXTOSOPIA: string = "../../assets/images/pnj/extosopia.webp"

// ITEMS
const EXTOSOPIA_RELIC: string = "../../assets/images/items/gauge-relic.webp"
const CARTOGRAPHER_MAP: string =
  "../../assets/images/items/cartographer-map.webp"

export const extosopiaIntroEvents: EventModel[] = [
  {
    eventName: "Extosopia merchant",
    dialog:
      "Hey traveler, would you be interested to exchange some batteries for my relic ? It is said that it help to predict the future..",
    eventImage: EXTOSOPIA_MERCHANT,
    rightChoice: {
      text: "Sure, why not.",
      consequence: {},
    },
    leftChoice: {
      text: "How does that work ..?",
      consequence: {},
    },
    quest: "EXTOSOPIA_RELIC",
  },
  {
    eventName: "Farseer Relic",
    dialog:
      "The strange relic emits a warm and comforting light. As you touch it, you feel more aware of your destiny, but you can't tell if it'll be good or bad yet..",
    eventImage: EXTOSOPIA_RELIC,
    rightChoice: {
      text: "...",
      consequence: { time: 0, energy: 0, health: 0, mental: 0 },
    },
    leftChoice: {
      text: "...",
      consequence: { time: 0, energy: 0, health: 0, mental: 0 },
    },
    quest: "EXTOSOPIA_EVENTS",
  },
]

export const extosopiaRepairEvents: EventModel[] = [
  {
    eventName: "Extosopian Cartographer",
    dialog:
      "I've heard of an hidden planet where the federation hides some advanced shield-technology.. All I've got is this mysterious map.",
    eventImage: EXTOSOPIA_CARTOGRAPHER,
    rightChoice: {
      text: "Thanks a lot, here's some ionic-batteries in exchange.",
      consequence: { energy: -5 },
    },
    leftChoice: {
      text: "Could be useful, please accept this pouch of temporal sand.",
      consequence: { time: -5 },
    },
    quest: "REPAIRS_1",
  },
  {
    eventName: "Cryptic map",
    dialog:
      "You receive some kind of map.. the kind you've never seen before. Where could it lead to ?",
    eventImage: CARTOGRAPHER_MAP,
    rightChoice: {
      text: "...",
      consequence: {},
    },
    leftChoice: {
      text: "...",
      consequence: {},
    },
  },
]

export const extosopiaEventsCollection: EventModel[] = [
  {
    eventName: "Extosopia",
    dialog: "An EXTOSOPIA cook offers to prepare a feast for the crew.",
    eventImage: EXTOSOPIA,
    rightChoice: {
      text: "Accept the feast offer.",
      consequence: { health: 20, energy: -10 },
    },
    leftChoice: {
      text: "Politely decline.",
      consequence: {},
    },
  },
  {
    eventName: "Extosopia",
    dialog: "We are invited to a local ceremony, it might take a while.",
    eventImage: EXTOSOPIA,
    rightChoice: {
      text: "Attend the ceremony.",
      consequence: { mental: 15, time: -20 },
    },
    leftChoice: {
      text: "Politely decline.",
      consequence: {},
    },
  },
  {
    eventName: "Extosopia",
    dialog:
      "We can learn about EXTOSOPIA technology, but it could be challenging.",
    eventImage: EXTOSOPIA,
    rightChoice: {
      text: "Learn about their technology.",
      consequence: { mental: 20, energy: -15 },
    },
    leftChoice: {
      text: "Focus on our own technology.",
      consequence: {},
    },
  },
  {
    eventName: "Extosopia",
    dialog: "We're asked to assist in a volcanic research expedition.",
    eventImage: EXTOSOPIA,
    rightChoice: {
      text: "Join the research expedition.",
      consequence: { time: 15, health: -10 },
    },
    leftChoice: {
      text: "Decline the expedition request.",
      consequence: {},
    },
  },
  {
    eventName: "Extosopia",
    dialog: "A local game tournament is taking place, should we participate?",
    eventImage: EXTOSOPIA,
    rightChoice: {
      text: "Participate in the tournament.",
      consequence: { mental: 10, energy: -5 },
    },
    leftChoice: {
      text: "Avoid the tournament.",
      consequence: {},
    },
  },
  {
    eventName: "Extosopia",
    dialog: "Locals have offered to perform maintenance on our ship.",
    eventImage: EXTOSOPIA,
    rightChoice: {
      text: "Accept the maintenance offer.",
      consequence: { energy: 20, time: -10 },
    },
    leftChoice: {
      text: "Politely decline the offer.",
      consequence: {},
    },
  },
  {
    eventName: "Extosopia",
    dialog:
      "We're offered a chance to enjoy EXTOSOPIA music. It's quite... unique.",
    eventImage: EXTOSOPIA,
    rightChoice: {
      text: "Enjoy the music.",
      consequence: { mental: -5, health: 15 },
    },
    leftChoice: {
      text: "Politely decline the offer.",
      consequence: {},
    },
  },
  {
    eventName: "Extosopia",
    dialog:
      "There's an opportunity to gather rare minerals but it's risky due to volcanic activity.",
    eventImage: EXTOSOPIA,
    rightChoice: {
      text: "Attempt to gather the minerals.",
      consequence: { energy: 20, health: -20 },
    },
    leftChoice: {
      text: "Avoid the risk.",
      consequence: {},
    },
  },
  {
    eventName: "Extosopia",
    dialog:
      "We can trade our tech insights for local knowledge. It could take some time.",
    eventImage: EXTOSOPIA,
    rightChoice: {
      text: "Trade the tech insights.",
      consequence: { mental: 20, time: -20 },
    },
    leftChoice: {
      text: "Keep our tech insights.",
      consequence: {},
    },
  },
  {
    eventName: "Extosopia",
    dialog:
      "We encounter a sentient nebula, its energies pulsing with mysterious patterns.",
    eventImage: EXTOSOPIA,
    rightChoice: {
      text: "Try to decipher the nebula's patterns.",
      consequence: { mental: 15, energy: -5 },
    },
    leftChoice: {
      text: "Keep a respectful distance from the nebula.",
      consequence: { energy: 10, mental: -5 },
    },
  },
  {
    eventName: "Extosopia",
    dialog:
      "A local entity, the Aeon, has shared a timeless riddle. Solving it may enlighten us.",
    eventImage: EXTOSOPIA,
    rightChoice: {
      text: "Attempt to solve the riddle.",
      consequence: { mental: 15, health: -10 },
    },
    leftChoice: {
      text: "Politely decline the riddle challenge.",
      consequence: { health: 10, mental: -5 },
    },
  },
  {
    eventName: "Extosopia",
    dialog:
      "The ship detects temporal fluctuations around a mysterious monolith.",
    eventImage: EXTOSOPIA,
    rightChoice: {
      text: "Investigate the monolith.",
      consequence: { time: 10, health: -5 },
    },
    leftChoice: {
      text: "Keep a safe distance from the monolith.",
      consequence: { health: 10, time: -5 },
    },
  },
  {
    eventName: "Extosopia",
    dialog:
      "We find a sea of liquid energy. Bathing in it could supercharge our systems.",
    eventImage: EXTOSOPIA,
    rightChoice: {
      text: "Immerse in the energy sea.",
      consequence: { energy: 15, mental: -10 },
    },
    leftChoice: {
      text: "Keep the ship dry.",
      consequence: { mental: 10, energy: -5 },
    },
  },
  {
    eventName: "Extosopia",
    dialog:
      "A constellation in the sky forms an ancient cosmic map, potentially revealing hidden sectors.",
    eventImage: EXTOSOPIA,
    rightChoice: {
      text: "Decipher the constellation map.",
      consequence: { mental: 15, time: -10 },
    },
    leftChoice: {
      text: "Maintain the current navigation path.",
      consequence: { time: 15, mental: -5 },
    },
  },
  {
    eventName: "Extosopia",
    dialog:
      "A species of luminous fauna emits radiation that can heal organic tissues.",
    eventImage: EXTOSOPIA,
    rightChoice: {
      text: "Approach the luminous fauna.",
      consequence: { health: 15, energy: -10 },
    },
    leftChoice: {
      text: "Steer clear of the fauna.",
      consequence: { energy: 10, health: -5 },
    },
  },
  {
    eventName: "Extosopia",
    dialog:
      "Local extosopians perform a ritual that bends time, creating a moment that lasts forever.",
    eventImage: EXTOSOPIA,
    rightChoice: {
      text: "Join the time-bending ritual.",
      consequence: { time: 20, health: -10 },
    },
    leftChoice: {
      text: "Observe the ritual from afar.",
      consequence: { health: 15, time: -5 },
    },
  },
  {
    eventName: "Extosopia",
    dialog:
      "The Great Extosopian Orchestra is performing. Their music resonates with the ship's core systems.",
    eventImage: EXTOSOPIA,
    rightChoice: {
      text: "Sync with the musical frequencies.",
      consequence: { energy: 20, time: -10 },
    },
    leftChoice: {
      text: "Shield the systems from external frequencies.",
      consequence: { time: 15, energy: -5 },
    },
  },
  {
    eventName: "Extosopia",
    dialog:
      "The planet's core emits waves that enhance cognition at the cost of physical stamina.",
    eventImage: EXTOSOPIA,
    rightChoice: {
      text: "Absorb the core's waves.",
      consequence: { mental: 20, health: -15 },
    },
    leftChoice: {
      text: "Shield the ship from the core's waves.",
      consequence: { health: 20, mental: -10 },
    },
  },
  {
    eventName: "Extosopia",
    dialog:
      "An ancient tree of knowledge shares its wisdom through its radiating energy.",
    eventImage: EXTOSOPIA,
    rightChoice: {
      text: "Approach the tree.",
      consequence: { mental: 20, energy: -15 },
    },
    leftChoice: {
      text: "Avoid the tree's area.",
      consequence: { energy: 20, mental: -15 },
    },
  },
  {
    eventName: "Extosopia",
    dialog:
      "A local dance is known to increase physical health but it's quite exhausting.",
    eventImage: EXTOSOPIA,
    rightChoice: {
      text: "Learn the dance.",
      consequence: { health: 15, energy: -10 },
    },
    leftChoice: {
      text: "Politely decline the dance lesson.",
      consequence: {},
    },
  },
  {
    eventName: "Extosopia",
    dialog:
      "Local cuisine is rich in nutrients but can be a bit too spicy for some.",
    eventImage: EXTOSOPIA,
    rightChoice: {
      text: "Try the local cuisine.",
      consequence: { health: 20, mental: -10 },
    },
    leftChoice: {
      text: "Stick to regular meals.",
      consequence: { mental: 10, health: -5 },
    },
  },
  {
    eventName: "Extosopia",
    dialog:
      "A hike to a local volcano offers breathtaking views but it's physically demanding.",
    eventImage: EXTOSOPIA,
    rightChoice: {
      text: "Take the hike.",
      consequence: { mental: 20, energy: -20 },
    },
    leftChoice: {
      text: "Stay back and relax.",
      consequence: { energy: 10, mental: -10 },
    },
  },
  {
    eventName: "Extosopia",
    dialog:
      "We're invited to a local party. It could be a chance to unwind or be draining.",
    eventImage: EXTOSOPIA,
    rightChoice: {
      text: "Join the party.",
      consequence: { mental: 15, energy: -10 },
    },
    leftChoice: {
      text: "Rest instead.",
      consequence: { energy: 10, mental: -5 },
    },
  },
  {
    eventName: "Extosopia",
    dialog:
      "Local meditation practices are said to calm the mind but can feel a bit strange.",
    eventImage: EXTOSOPIA,
    rightChoice: {
      text: "Try local meditation.",
      consequence: { mental: 20, health: -5 },
    },
    leftChoice: {
      text: "Keep to our usual routines.",
      consequence: { mental: -10, health: 10 },
    },
  },
  {
    eventName: "Extosopia",
    dialog:
      "We're offered to take part in local sports. It's quite energetic and competitive.",
    eventImage: EXTOSOPIA,
    rightChoice: {
      text: "Participate in the sports.",
      consequence: { health: 15, energy: -15 },
    },
    leftChoice: {
      text: "Sit out and watch.",
      consequence: { mental: -5, energy: 10 },
    },
  },
  {
    eventName: "Extosopia",
    dialog:
      "We can exchange tales of our adventures but they might not fully understand.",
    eventImage: EXTOSOPIA,
    rightChoice: {
      text: "Share our tales.",
      consequence: { mental: 10, time: -10 },
    },
    leftChoice: {
      text: "Listen to their stories instead.",
      consequence: { time: 10, mental: -5 },
    },
  },
  {
    eventName: "Extosopia",
    dialog:
      "We can assist in local construction. It's hard work, but they would appreciate it.",
    eventImage: EXTOSOPIA,
    rightChoice: {
      text: "Help with the construction.",
      consequence: { health: 15, energy: -20 },
    },
    leftChoice: {
      text: "Politely decline the offer.",
      consequence: { mental: -10, energy: 10 },
    },
  },
  {
    eventName: "Extosopia",
    dialog:
      "A local merchant offers to trade goods. Their prices can be a bit high.",
    eventImage: EXTOSOPIA,
    rightChoice: {
      text: "Trade with the merchant.",
      consequence: { health: 10, energy: -10 },
    },
    leftChoice: {
      text: "Politely decline the offer.",
      consequence: { mental: -5, energy: 10 },
    },
  },
  {
    eventName: "Extosopia",
    dialog:
      "An opportunity arises to learn local language. It's quite complex.",
    eventImage: EXTOSOPIA,
    rightChoice: {
      text: "Learn the local language.",
      consequence: { mental: 15, time: -15 },
    },
    leftChoice: {
      text: "Stick to universal translator.",
      consequence: { time: 10, mental: -10 },
    },
  },
  {
    eventName: "Extosopia",
    dialog:
      "We're invited to a traditional music session. It can be quite loud.",
    eventImage: EXTOSOPIA,
    rightChoice: {
      text: "Attend the music session.",
      consequence: { mental: 10, health: -10 },
    },
    leftChoice: {
      text: "Take some quiet time instead.",
      consequence: { health: 10, mental: -5 },
    },
  },
  {
    eventName: "Extosopia",
    dialog:
      "A floating crystal forest is offering us a chance to synchronize our minds.",
    eventImage: EXTOSOPIA,
    rightChoice: {
      text: "Synchronize minds with the forest.",
      consequence: { mental: 20, time: -15 },
    },
    leftChoice: {
      text: "Politely decline the crystal's offer.",
      consequence: { time: 10, mental: -10 },
    },
  },
  {
    eventName: "Extosopia",
    dialog:
      "A Glibnobber Beast offers to give us a ride. It's known for its bumpy rides.",
    eventImage: EXTOSOPIA,
    rightChoice: {
      text: "Ride the Glibnobber Beast.",
      consequence: { health: -15, time: 20 },
    },
    leftChoice: {
      text: "Politely decline the Glibnobber's offer.",
      consequence: { time: -10, health: 10 },
    },
  },
  {
    eventName: "Extosopia",
    dialog:
      "Local aliens offer a Bio-resonance session, promising to balance our energies.",
    eventImage: EXTOSOPIA,
    rightChoice: {
      text: "Accept the Bio-resonance session.",
      consequence: { energy: 20, mental: -10 },
    },
    leftChoice: {
      text: "Politely decline the offer.",
      consequence: { mental: 10, energy: -10 },
    },
  },
  {
    eventName: "Extosopia",
    dialog:
      "The Extosopia Choir of Whales invites us to a deep-sea singing concert.",
    eventImage: EXTOSOPIA,
    rightChoice: {
      text: "Attend the deep-sea concert.",
      consequence: { mental: 15, health: -10 },
    },
    leftChoice: {
      text: "Stay ashore and enjoy the tranquility.",
      consequence: { health: 10, mental: -5 },
    },
  },
  {
    eventName: "Extosopia",
    dialog:
      "An underground hot lava pool invites us for a warm bath, it might be too hot though.",
    eventImage: EXTOSOPIA,
    rightChoice: {
      text: "Take a bath in the lava pool.",
      consequence: { health: 20, energy: -20 },
    },
    leftChoice: {
      text: "Decline and take a regular bath instead.",
      consequence: { energy: 10, health: -5 },
    },
  },
  {
    eventName: "Extosopia",
    dialog:
      "A psionic fruit tree offers its fruits, it enhances cognitive functions at cost of physical energy.",
    eventImage: EXTOSOPIA,
    rightChoice: {
      text: "Eat the psionic fruit.",
      consequence: { mental: 20, energy: -15 },
    },
    leftChoice: {
      text: "Politely decline and eat our own food.",
      consequence: { energy: 10, mental: -5 },
    },
  },
  {
    eventName: "Extosopia",
    dialog:
      "A mystical mountain offers to teleport us to its peak, saving time but it can be disorienting.",
    eventImage: EXTOSOPIA,
    rightChoice: {
      text: "Accept the mountain's offer.",
      consequence: { time: 20, mental: -15 },
    },
    leftChoice: {
      text: "Politely decline and continue on foot.",
      consequence: { mental: 10, time: -10 },
    },
  },
  {
    eventName: "Extosopia",
    dialog:
      "A local alien offers us a local delicacy called Zarblatt, known for its potent energy boosting properties but might upset our digestive systems.",
    eventImage: EXTOSOPIA,
    rightChoice: {
      text: "Try the Zarblatt.",
      consequence: { energy: 20, health: -10 },
    },
    leftChoice: {
      text: "Politely decline and stick to our own food.",
      consequence: { health: 5, energy: -5 },
    },
  },
  {
    eventName: "Extosopia",
    dialog:
      "The local tribe offers us a dance under the bioluminescent trees, it's a physical workout but can be very enlightening.",
    eventImage: EXTOSOPIA,
    rightChoice: {
      text: "Join in the dance.",
      consequence: { mental: 20, energy: -15 },
    },
    leftChoice: {
      text: "Politely watch and enjoy the dance.",
      consequence: { energy: 10, mental: -5 },
    },
  },
  {
    eventName: "Extosopia",
    dialog:
      "Local inhabitants suggest us to dive into the Mind-Melding River, it increases our cognitive function but may alter the sense of time.",
    eventImage: EXTOSOPIA,
    rightChoice: {
      text: "Dive into the Mind-Melding River.",
      consequence: { mental: 20, time: -15 },
    },
    leftChoice: {
      text: "Politely decline and keep to dry land.",
      consequence: { time: 10, mental: -5 },
    },
  },
  {
    eventName: "Extosopia",
    dialog:
      "We come across a field of floating anti-gravity stones. Touching them might affect our mental clarity.",
    eventImage: EXTOSOPIA,
    rightChoice: {
      text: "Touch the floating stones.",
      consequence: { mental: 20, time: -10 },
    },
    leftChoice: {
      text: "Stay clear of the stones.",
      consequence: { time: 10, mental: -5 },
    },
  },
  {
    eventName: "Extosopia",
    dialog: "We spot a shimmering oasis filled with time-dilating waters.",
    eventImage: EXTOSOPIA,
    rightChoice: {
      text: "Bathe in the oasis.",
      consequence: { time: 20, energy: -10 },
    },
    leftChoice: {
      text: "Avoid the shimmering waters.",
      consequence: { energy: 15, time: -5 },
    },
  },
  {
    eventName: "Extosopia",
    dialog: "Our sensors pick up an energy-rich crystalline cave nearby.",
    eventImage: EXTOSOPIA,
    rightChoice: {
      text: "Explore the cave.",
      consequence: { energy: 20, health: -10 },
    },
    leftChoice: {
      text: "Steer clear of the cave.",
      consequence: { health: 15, energy: -10 },
    },
  },
  {
    eventName: "Extosopia",
    dialog:
      "The planet's vibrant atmosphere allows us to recharge the ship's energy reserves.",
    eventImage: EXTOSOPIA,
    rightChoice: {
      text: "Absorb the atmospheric energy.",
      consequence: { energy: 20, time: -5 },
    },
    leftChoice: {
      text: "Don't tamper with the atmosphere.",
      consequence: { time: 10, energy: -5 },
    },
  },
  {
    eventName: "Extosopia",
    dialog:
      "A local creature, the MindBeast, is said to boost cognitive abilities to those who can outsmart it.",
    eventImage: EXTOSOPIA,
    rightChoice: {
      text: "Try to outsmart the MindBeast.",
      consequence: { mental: 20, health: -10 },
    },
    leftChoice: {
      text: "Avoid the MindBeast.",
      consequence: { health: 10, mental: -5 },
    },
  },
  {
    eventName: "Extosopia",
    dialog:
      "We discover a field of plants emitting a soft, soothing light said to restore physical well-being.",
    eventImage: EXTOSOPIA,
    rightChoice: {
      text: "Bask in the soothing light.",
      consequence: { health: 20, energy: -10 },
    },
    leftChoice: {
      text: "Avoid the glowing plants.",
      consequence: { energy: 15, health: -5 },
    },
  },
  {
    eventName: "Extosopia",
    dialog:
      "The Galactic Alignment event has begun, causing fluctuations in the fabric of time.",
    eventImage: EXTOSOPIA,
    rightChoice: {
      text: "Observe the Galactic Alignment.",
      consequence: { time: 20, mental: -15 },
    },
    leftChoice: {
      text: "Ignore the event.",
      consequence: { mental: 10, time: -10 },
    },
  },
  {
    eventName: "Extosopia",
    dialog: "We've located a cache of ancient, power-infused artifacts.",
    eventImage: EXTOSOPIA,
    rightChoice: {
      text: "Collect the artifacts.",
      consequence: { energy: 20, health: -15 },
    },
    leftChoice: {
      text: "Leave the artifacts untouched.",
      consequence: { health: 20, energy: -10 },
    },
  },
  {
    eventName: "Extosopia",
    dialog:
      "The radiant Harmonic Crystal is vibrating at a frequency that could boost our mental functions.",
    eventImage: EXTOSOPIA,
    rightChoice: {
      text: "Attune to the Harmonic Crystal.",
      consequence: { mental: 20, health: -10 },
    },
    leftChoice: {
      text: "Ignore the crystal.",
      consequence: { health: 15, mental: -5 },
    },
  },
  {
    eventName: "Extosopia",
    dialog:
      "We're invited to participate in the Extosopian Unity Mind-meld - an event that could enhance our cognitive abilities.",
    eventImage: EXTOSOPIA,
    rightChoice: {
      text: "Join the Mind-meld.",
      consequence: { mental: 20, time: -15 },
    },
    leftChoice: {
      text: "Refrain from the Mind-meld.",
      consequence: { time: 15, mental: -10 },
    },
  },
]
