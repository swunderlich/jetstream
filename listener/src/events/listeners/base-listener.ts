import {Subjects} from '../subjects';
import {
  consumerOpts, createInbox,
  JetStreamClient, JsMsg,
  StringCodec,
} from 'nats';

interface Event {
  subject: Subjects;
  data: any;
}

export abstract class Listener<T extends Event> {
  abstract subject: T['subject'];
  protected client: JetStreamClient;
  abstract onMessage (data: T['data'], msg: JsMsg): void;
  constructor(client: JetStreamClient) {
    this.client = client;
  }

  async listen () {
    const sc = StringCodec();
    const opts = consumerOpts();
    opts.durable("test");
    opts.manualAck();
    opts.ackExplicit();
    opts.deliverTo(createInbox());
    const subscription = await this.client.subscribe(this.subject, opts);
      for await (const m of subscription) {
        this.onMessage(JSON.parse(sc.decode(m.data)), m);
      }
      console.log("subscription closed");
  }
}
