import {natsWrapper} from './nats-wrapper';
import {TestListener} from './events/listeners/test-listener';
import {app} from './app';

const start = async () => {

    try {
        await natsWrapper.connect();
        new TestListener(natsWrapper.client).listen();
    } catch (err) {
        console.error(err)
    }

    app.listen(3000, () => {
        console.log('started')
    })
};

start();
