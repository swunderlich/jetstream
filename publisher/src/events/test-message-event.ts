import {Subjects} from './subjects';

export interface TestMessageEvent {
  subject: Subjects.TestMessage;
  data: {
    text: string;
  };
}