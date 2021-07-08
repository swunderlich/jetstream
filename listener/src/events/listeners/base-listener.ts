import {Subjects} from '../subjects';
import {Msg, NatsConnection, StringCodec} from 'nats';

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

  listen () {
    const sc = StringCodec();
    const subscription = this.client.subscribe(this.subject);
    (async () => {
      for await (const m of subscription) {
        this.onMessage(JSON.parse(sc.decode(m.data)), m);
      }
      console.log("subscription closed");
    })();


  }
}
