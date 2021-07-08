import {Listener} from './base-listener';
import {TestMessageEvent} from '../test-message-event';
import {Subjects} from '../subjects';
import {Msg} from 'nats';

export class TestListener extends Listener<TestMessageEvent> {
  async onMessage(data: TestMessageEvent["data"], msg: Msg) {
    console.log('received message', data)
  }

  readonly subject = Subjects.TestMessage

}