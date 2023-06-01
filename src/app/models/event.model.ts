export class EventModel {
  eventName!: string;
  dialog!: string;
  eventImage!: string;
  rightChoice!: {
    text: string;
    consequence: {
      time?: number;
      energy?: number;
      health?: number;
      mental?: number;
    };
  };
  leftChoice!: {
    text: string;
    consequence: {
      time?: number;
      energy?: number;
      health?: number;
      mental?: number;
    };
  };
  quest?:string
}
