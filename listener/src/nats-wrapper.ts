import {connect, JetStreamClient, NatsConnection} from 'nats';

class NatsWrapper {
  private _client?: JetStreamClient; // ? means that it can be undefined sometimes

  get client () {
    if (!this._client) {
      throw new Error('Cannot access nats before connecting');
    }
    return this._client;
  }

  async connect (): Promise<void> {
    const connection: NatsConnection = await connect({servers: 'nats-srv:4222'});
    this._client = connection.jetstream();
    console.log('Connected to NATS JetStream');
  }
}

export const natsWrapper = new NatsWrapper();