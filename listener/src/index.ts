import {natsWrapper} from './nats-wrapper';

const start = async () => {

    try {
        await natsWrapper.connect()
    } catch (err) {
        console.error(err)
    }
}

start();



