import {Listener} from './base-listener';
import {TestMessageEvent} from '../test-message-event';
import {Subjects} from '../subjects';
import {JsMsg} from 'nats';

export class TestListener extends Listener<TestMessageEvent> {
  async onMessage(data: TestMessageEvent["data"], msg: JsMsg) {
    console.log('received message', data)
    msg.ack();
  }

  readonly subject = Subjects.TestMessage

}