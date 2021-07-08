import {Publisher} from './base-publisher';
import {TestMessageEvent} from '../test-message-event';
import {Subjects} from '../subjects';

export class TestPublisher extends Publisher<TestMessageEvent> {
  readonly subject = Subjects.TestMessage;
}