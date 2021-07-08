import {JetStreamClient, StringCodec} from 'nats'
import {Subjects} from '../subjects';


interface Event {
  subject: Subjects;
  data: any;
}

export abstract class Publisher<T extends Event> {
  abstract subject: T['subject'];
  protected client: JetStreamClient;

  constructor(client: JetStreamClient) {
    this.client = client;
  };

  publish (data: T['data']): Promise<void> {
    return new Promise((resolve, reject) => {
      try {
        const sc = StringCodec();
        console.log('publishing message to', this.subject);
        this.client.publish(this.subject, sc.encode(JSON.stringify(data)));
        resolve();
      } catch (err) {
        reject(err);
      }
    })
  };
}