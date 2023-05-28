import { EventModel } from 'src/app/models/event.model';

const AI_RABBIT: string = '../../assets/images/pnj/rabbit.png';
const CLOCKMAKER: string = '../../assets/images/pnj/clockmaker.png';

export const events: EventModel[] = [
  {
    eventName: 'AI Rabbit',
    dialog: 'hello traveler',
    eventImage: AI_RABBIT,
    rightChoice: {
      text: 'Red pill',
      consequence: { time: 10, energy: -10 },
    },
    leftChoice: {
      text: 'Red pill',
      consequence: { time: 10, energy: -10 },
    },
  },
  {
    eventName: 'Horloger',
    dialog: 'Look at my shop',
    eventImage: CLOCKMAKER,
    rightChoice: {
      text: 'Gold watch',
      consequence: { time: 20, mental: 30 },
    },
    leftChoice: {
      text: 'Red pill',
      consequence: { time: 10, energy: -10 },
    },
  },
  {
    eventName: 'AI Rabbit',
    dialog: 'hello traveler',
    eventImage: AI_RABBIT,
    rightChoice: {
      text: 'Red pill',
      consequence: { time: 10, energy: -10 },
    },
    leftChoice: {
      text: 'Red pill',
      consequence: { time: 10, energy: -10 },
    },
  },
  {
    eventName: 'Horloger',
    dialog: 'Look at my shop',
    eventImage: CLOCKMAKER,
    rightChoice: {
      text: 'Gold watch',
      consequence: { time: 20, mental: 30 },
    },
    leftChoice: {
      text: 'Red pill',
      consequence: { time: 10, energy: -10 },
    },
  },
  {
    eventName: 'AI Rabbit',
    dialog: 'hello traveler',
    eventImage: AI_RABBIT,
    rightChoice: {
      text: 'Red pill',
      consequence: { time: 10, energy: -10 },
    },
    leftChoice: {
      text: 'Red pill',
      consequence: { time: 10, energy: -10 },
    },
  },
  {
    eventName: 'Horloger',
    dialog: 'Look at my shop',
    eventImage: CLOCKMAKER,
    rightChoice: {
      text: 'Gold watch',
      consequence: { time: 20, mental: 30 },
    },
    leftChoice: {
      text: 'Red pill',
      consequence: { time: 10, energy: -10 },
    },
  },
  {
    eventName: 'AI Rabbit',
    dialog: 'hello traveler',
    eventImage: AI_RABBIT,
    rightChoice: {
      text: 'Red pill',
      consequence: { time: 10, energy: -10 },
    },
    leftChoice: {
      text: 'Red pill',
      consequence: { time: 10, energy: -10 },
    },
  },
  {
    eventName: 'Horloger',
    dialog: 'Look at my shop',
    eventImage: CLOCKMAKER,
    rightChoice: {
      text: 'Gold watch',
      consequence: { time: 20, mental: 30 },
    },
    leftChoice: {
      text: 'Red pill',
      consequence: { time: 10, energy: -10 },
    },
  },
];
