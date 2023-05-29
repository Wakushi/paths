import { EventModel } from 'src/app/models/event.model';

const AI_RABBIT_IMAGE: string = '../../assets/images/pnj/rabbit.webp';
const CLOCKMAKER_IMAGE: string = '../../assets/images/pnj/clockmaker.webp';
const TEMPORAL_MAYOR_IMAGE: string = '../../assets/images/pnj/mayor.webp';
const TEMPORAL_ANARCHIST_IMAGE: string =
  '../../assets/images/pnj/anarchist.webp';
const GATEKEEPER_IMAGE: string = '../../assets/images/pnj/gatekeeper.webp';
const RESEARCH_SCIENTIST_IMAGE: string =
  '../../assets/images/pnj/scientist.webp';
const DIMENSIONAL_THIEF_IMAGE: string = '../../assets/images/pnj/thief.webp';
const SPACE_CLINIC_DOCTOR_IMAGE: string = '../../assets/images/pnj/doctor.webp';
const LIBRARY_SAGE_IMAGE: string = '../../assets/images/pnj/library-sage.webp';
const BIO_PROTECTION_ENGINEER_IMAGE: string =
  '../../assets/images/pnj/bio-engineer.webp';
const SEWER_CREATURE_IMAGE: string = '../../assets/images/pnj/creature.webp';
const ILLUSIONIST_ARTIST_IMAGE: string =
  '../../assets/images/pnj/illusionist.webp';
const COSMIC_PROFESSOR_IMAGE: string = '../../assets/images/pnj/professor.webp';
const TIMEKEEPER_IMAGE: string = '../../assets/images/pnj/clockmaker.webp';

export const events: EventModel[] = [
  {
    eventName: 'AI Rabbit',
    dialog: 'We probably should help the computing sect ! What do you think ?',
    eventImage: AI_RABBIT_IMAGE,
    rightChoice: {
      text: "Let's do this !",
      consequence: { time: -20, energy: 10 },
    },
    leftChoice: {
      text: 'Absolutely not..',
      consequence: { time: 10, energy: -20 },
    },
  },
  {
    eventName: 'The Temporal Mayor',
    dialog:
      'We need to establish strict time regulations in the city. Should we enforce them?',
    eventImage: TEMPORAL_MAYOR_IMAGE,
    rightChoice: {
      text: "Absolutely, let's regulate time!",
      consequence: { time: -20, energy: 5 },
    },
    leftChoice: {
      text: 'No, let time flow freely.',
      consequence: { time: 10, energy: -10 },
    },
  },
  {
    eventName: 'The Municipal Clockmaker',
    dialog:
      "I've discovered a way to optimize the central clock. Should we implement the changes?",
    eventImage: CLOCKMAKER_IMAGE,
    rightChoice: {
      text: 'Yes, optimize the clock!',
      consequence: { time: -10, energy: 5 },
    },
    leftChoice: {
      text: 'No, keep the clock as it is.',
      consequence: { time: 10, energy: -5 },
    },
  },
  {
    eventName: 'The Temporal Anarchist',
    dialog:
      'The time regulations are oppressive! Should we support their cause?',
    eventImage: TEMPORAL_ANARCHIST_IMAGE,
    rightChoice: {
      text: "Yes, let's support the cause!",
      consequence: { time: 10, energy: -15 },
    },
    leftChoice: {
      text: 'No, we must maintain order.',
      consequence: { time: -10, energy: 5 },
    },
  },
  {
    eventName: 'AI Rabbit',
    dialog:
      'The computing sect needs our support to solve a complex algorithm. Shall we lend a hand?',
    eventImage: AI_RABBIT_IMAGE,
    rightChoice: {
      text: "We're on it!",
      consequence: { time: -30, energy: 20 },
    },
    leftChoice: {
      text: 'Let them solve it themselves.',
      consequence: { time: 20, energy: -30 },
    },
  },
  {
    eventName: 'Horloger',
    dialog:
      'I have a question for you. Should I continue working on my exquisite silver pocket watch or focus on my grand copper wall clock project?',
    eventImage: CLOCKMAKER_IMAGE,
    rightChoice: {
      text: 'Continue with the silver pocket watch',
      consequence: { time: 30, mental: 40 },
    },
    leftChoice: {
      text: 'Focus on the copper wall clock project',
      consequence: { time: -30, health: -15 },
    },
  },
  {
    eventName: 'The Temporal Mayor',
    dialog:
      'We have an opportunity to synchronize our city time with the universal time. Shall we proceed?',
    eventImage: TEMPORAL_MAYOR_IMAGE,
    rightChoice: {
      text: "Yes, let's synchronize!",
      consequence: { time: -10, energy: 10 },
    },
    leftChoice: {
      text: 'No, we should have our own time.',
      consequence: { time: 20, energy: -5 },
    },
  },
  {
    eventName: 'The Municipal Clockmaker',
    dialog:
      "I've been thinking about altering the clock tower's chime. Shall we change the chime?",
    eventImage: CLOCKMAKER_IMAGE,
    rightChoice: {
      text: 'Yes, change the chime!',
      consequence: { time: -5, energy: 10 },
    },
    leftChoice: {
      text: 'No, keep the current chime.',
      consequence: { time: 15, energy: -5 },
    },
  },
  {
    eventName: 'The Temporal Anarchist',
    dialog:
      'I propose to abolish all time rules for one day. Do you support the idea?',
    eventImage: TEMPORAL_ANARCHIST_IMAGE,
    rightChoice: {
      text: "Yes, let's live freely for one day!",
      consequence: { time: 15, energy: -20 },
    },
    leftChoice: {
      text: 'No, we need time rules.',
      consequence: { time: -15, energy: 10 },
    },
  },
  {
    eventName: 'The Gatekeeper',
    dialog:
      'We have an opportunity to channel surplus dimensional energy to improve city infrastructure. What do you think?',
    eventImage: GATEKEEPER_IMAGE,
    rightChoice: {
      text: 'Channel the energy!',
      consequence: { energy: -15, health: 10 },
    },
    leftChoice: {
      text: 'Save it for the future.',
      consequence: { energy: 10 },
    },
  },
  {
    eventName: 'The Gatekeeper',
    dialog:
      'We have a surplus of dimensional energy. How should we utilize it?',
    eventImage: GATEKEEPER_IMAGE,
    rightChoice: {
      text: 'Invest in dimensional exploration!',
      consequence: { energy: -10, health: 5 },
    },
    leftChoice: {
      text: 'Store it for emergencies.',
      consequence: { energy: 5 },
    },
  },
  {
    eventName: 'The Research Scientist',
    dialog:
      "I've made a breakthrough in dimensional energy extraction. Should we implement the new method?",
    eventImage: RESEARCH_SCIENTIST_IMAGE,
    rightChoice: {
      text: 'Yes, implement the new method!',
      consequence: { energy: -10, health: 5 },
    },
    leftChoice: {
      text: 'No, stick to the current method.',
      consequence: { energy: 5 },
    },
  },
  {
    eventName: 'The Dimensional Thief',
    dialog:
      "I've discovered a source of dimensional energy. Should we steal it?",
    eventImage: DIMENSIONAL_THIEF_IMAGE,
    rightChoice: {
      text: 'No, stealing is wrong.',
      consequence: { energy: 10, health: -10 },
    },
    leftChoice: {
      text: "Yes, let's take advantage of it!",
      consequence: { energy: -10, health: 5 },
    },
  },
  {
    eventName: 'The Space Clinic Doctor',
    dialog:
      'We have new medical treatments available. Should we offer them to the citizens?',
    eventImage: SPACE_CLINIC_DOCTOR_IMAGE,
    rightChoice: {
      text: 'Yes, provide the new treatments!',
      consequence: { health: -10, mental: 5 },
    },
    leftChoice: {
      text: 'No, stick to traditional treatments.',
      consequence: { health: 5 },
    },
  },
  {
    eventName: 'The Bio-Protection Engineer',
    dialog:
      "I've developed advanced protective gear. Should we distribute it to the citizens?",
    eventImage: BIO_PROTECTION_ENGINEER_IMAGE,
    rightChoice: {
      text: 'Yes, distribute the protective gear!',
      consequence: { health: -5, mental: 5 },
    },
    leftChoice: {
      text: "No, it's unnecessary.",
      consequence: { health: 5 },
    },
  },
  {
    eventName: 'The Sewer Creature',
    dialog: "I'm emitting dangerous radiation. Should we contain me?",
    eventImage: SEWER_CREATURE_IMAGE,
    rightChoice: {
      text: 'Yes, contain the radiation!',
      consequence: { health: 10, mental: -5 },
    },
    leftChoice: {
      text: 'No, let it be.',
      consequence: { health: -10, mental: 5 },
    },
  },
  {
    eventName: 'The Universal Library Sage',
    dialog: 'I have ancient knowledge to share. Should I reveal it?',
    eventImage: LIBRARY_SAGE_IMAGE,
    rightChoice: {
      text: 'Yes, share the ancient knowledge!',
      consequence: { mental: -10, time: 5 },
    },
    leftChoice: {
      text: 'No, keep it hidden.',
      consequence: { mental: 5 },
    },
  },
  {
    eventName: 'The Illusionist Artist',
    dialog:
      'I can create mesmerizing illusions. Should I perform in the streets?',
    eventImage: ILLUSIONIST_ARTIST_IMAGE,
    rightChoice: {
      text: 'Yes, mesmerize the crowd!',
      consequence: { mental: -5, time: 5 },
    },
    leftChoice: {
      text: "No, it's unnecessary.",
      consequence: { mental: 5 },
    },
  },
  {
    eventName: 'The Cosmic College Professor',
    dialog:
      'I can teach cosmic knowledge. Should I share it with the students?',
    eventImage: COSMIC_PROFESSOR_IMAGE,
    rightChoice: {
      text: 'Yes, share the cosmic knowledge!',
      consequence: { mental: -10, time: 5 },
    },
    leftChoice: {
      text: "No, it's too advanced for them.",
      consequence: { mental: 5 },
    },
  },
  {
    eventName: 'The Temporal Mayor',
    dialog:
      'We need to establish strict time regulations in the city. Should we enforce them?',
    eventImage: TEMPORAL_MAYOR_IMAGE,
    rightChoice: {
      text: "Absolutely, let's regulate time!",
      consequence: { time: -20, energy: 10 },
    },
    leftChoice: {
      text: 'No, let time flow freely.',
      consequence: { time: 10, energy: -20 },
    },
  },
  {
    eventName: 'The Timekeeper',
    dialog:
      'I have discovered a new temporal anomaly. Should we investigate further?',
    eventImage: TIMEKEEPER_IMAGE,
    rightChoice: {
      text: "Yes, let's investigate the anomaly!",
      consequence: { time: -10, energy: 5 },
    },
    leftChoice: {
      text: "No, it's too risky.",
      consequence: { time: 5 },
    },
  },
  {
    eventName: 'The Dimensional Thief',
    dialog:
      'I have stolen a valuable artifact from the future. Should we use it to our advantage?',
    eventImage: DIMENSIONAL_THIEF_IMAGE,
    rightChoice: {
      text: "Yes, let's harness the power of the artifact!",
      consequence: { time: -5, energy: 10 },
    },
    leftChoice: {
      text: 'No, we must return it to its rightful place.',
      consequence: { time: 5, energy: -10 },
    },
  },
  {
    eventName: 'The Gatekeeper',
    dialog:
      'We have a surplus of dimensional energy. How should we utilize it?',
    eventImage: GATEKEEPER_IMAGE,
    rightChoice: {
      text: 'Invest in dimensional exploration!',
      consequence: { energy: -10, health: 5 },
    },
    leftChoice: {
      text: 'Store it for emergencies.',
      consequence: { energy: 5 },
    },
  },
  {
    eventName: 'The Research Scientist',
    dialog:
      "I've made a breakthrough in dimensional energy extraction. Should we implement the new method?",
    eventImage: RESEARCH_SCIENTIST_IMAGE,
    rightChoice: {
      text: 'Yes, implement the new method!',
      consequence: { energy: -10, health: 5 },
    },
    leftChoice: {
      text: 'No, stick to the current method.',
      consequence: { energy: 5 },
    },
  },
  {
    eventName: 'The Timekeeper',
    dialog: 'A dimensional rift has appeared. Should we attempt to seal it?',
    eventImage: TIMEKEEPER_IMAGE,
    rightChoice: {
      text: "Yes, let's seal the rift!",
      consequence: { energy: -5, health: 10 },
    },
    leftChoice: {
      text: 'No, it may lead to new discoveries.',
      consequence: { energy: 5, health: -10 },
    },
  },
  {
    eventName: 'The Space Clinic Doctor',
    dialog:
      'New medical technologies are available. Should we use them to improve healthcare?',
    eventImage: SPACE_CLINIC_DOCTOR_IMAGE,
    rightChoice: {
      text: "Yes, let's embrace the new medical technologies!",
      consequence: { health: -10, mental: 5 },
    },
    leftChoice: {
      text: 'No, traditional methods are sufficient.',
      consequence: { health: 5 },
    },
  },
  {
    eventName: 'The Bio-Protection Engineer',
    dialog:
      "I've developed advanced bio-enhancements. Should we offer them to the citizens?",
    eventImage: BIO_PROTECTION_ENGINEER_IMAGE,
    rightChoice: {
      text: 'Yes, offer the bio-enhancements!',
      consequence: { health: -5, mental: 5 },
    },
    leftChoice: {
      text: 'No, it may have unintended consequences.',
      consequence: { health: 5 },
    },
  },
  {
    eventName: 'The Sewer Creature',
    dialog:
      'I possess unique genetic traits. Should we study or quarantine me?',
    eventImage: SEWER_CREATURE_IMAGE,
    rightChoice: {
      text: "Yes, let's study the genetic traits!",
      consequence: { health: 10, mental: -5 },
    },
    leftChoice: {
      text: "No, it's too dangerous.",
      consequence: { health: -10, mental: 5 },
    },
  },
  {
    eventName: 'The Library Sage',
    dialog: 'I have ancient cosmic wisdom to share. Should I reveal it?',
    eventImage: LIBRARY_SAGE_IMAGE,
    rightChoice: {
      text: 'Yes, share the ancient wisdom!',
      consequence: { mental: -10, time: 5 },
    },
    leftChoice: {
      text: 'No, it may overwhelm the citizens.',
      consequence: { mental: 5 },
    },
  },
  {
    eventName: 'The Illusionist Artist',
    dialog: 'I can create mesmerizing illusions. Should I perform in the city?',
    eventImage: ILLUSIONIST_ARTIST_IMAGE,
    rightChoice: {
      text: 'Yes, mesmerize the city with illusions!',
      consequence: { mental: -5, time: 5 },
    },
    leftChoice: {
      text: 'No, it may confuse the citizens.',
      consequence: { mental: 5 },
    },
  },
  {
    eventName: 'The Library Sage',
    dialog: 'I have deep cosmic insights. Should I share them with the public?',
    eventImage: LIBRARY_SAGE_IMAGE,
    rightChoice: {
      text: 'Yes, share the cosmic insights!',
      consequence: { mental: -10, time: 5 },
    },
    leftChoice: {
      text: 'No, the public may not understand.',
      consequence: { mental: 5 },
    },
  },
];
