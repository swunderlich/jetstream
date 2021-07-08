import {Subjects} from '../subjects';
import { Msg, NatsConnection, StringCodec, SubscriptionOptions} from 'nats';

interface Event {
  subject: Subjects;
  data: any;
}

export abstract class Listener<T extends Event> {
  abstract subject: T['subject'];
  protected client: NatsConnection;
  abstract onMessage (data: T['data'], msg: Msg): void;
  constructor(client: NatsConnection) {
    this.client = client;
  }

  async listen () {
    const sc = StringCodec();
    const opts: SubscriptionOptions = {
      // todo figure out durable, ack and so on
    }
    const subscription = this.client.subscribe(this.subject, opts);
      for await (const m of subscription) {
        this.onMessage(JSON.parse(sc.decode(m.data)), m);
      }
      console.log("subscription closed");
  }
}
