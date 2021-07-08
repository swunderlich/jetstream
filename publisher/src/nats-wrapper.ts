import {connect, NatsConnection} from 'nats';

class NatsWrapper {
  private _client?: NatsConnection; // ? means that it can be undefined sometimes

  get client () {
    if (!this._client) {
      throw new Error('Cannot access nats before connecting');
    }
    return this._client;
  }

  async connect (): Promise<void> {
    this._client = await connect({servers: 'nats-srv:4222'});
    console.log('Connected to NATS');
  }
}

export const natsWrapper = new NatsWrapper();