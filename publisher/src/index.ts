import {natsWrapper} from './nats-wrapper';
import {TestPublisher} from './events/publishers/test-publisher';
import {app} from './app';

const start = async () => {

    try {
        await natsWrapper.connect()
        const publisher = new TestPublisher(natsWrapper.client)
        setInterval(() => {
            publisher.publish({
                text: 'test from test publisher'
            })
        }, 5000)
    } catch (err) {
        console.error(err)
    }

    app.listen(3000, () => {
        console.log('started')
    })
}



start();



