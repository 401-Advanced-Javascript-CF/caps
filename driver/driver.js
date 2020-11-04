'use strict';


// const event = require('../caps/event.js');

// event.on('pickup', handler);

// function handler(order){
//     setTimeout(() => {
//         // console.log(order);
//         console.log(`DRIVER: picked up ${order.orderId}`);
//         event.emit('in-transit', order);
//     }, 1000)
// }

// event.on('in-transit', deliverHandler);

// function deliverHandler(order){
//     setTimeout(() => {
//         console.log(`DRIVER: delivered up ${order.orderId}`);
//         event.emit('delivered', order);
//     }, 3000)
// }
const net = require('net');

const client = new net.Socket();
const port = 3000;
const host = 'localhost';

client.connect(port, host, () => console.log(`connected to Driver at port ${port} on host ${host}`));

client.on('data', data => {
    let parsed = JSON.parse(data);
    if(parsed.event === 'pickup'){
        let object = {event: 'DRIVER', payload: `picked up ${parsed.payload.orderId}`};
        let message = JSON.stringify(object);
        setTimeout(() => {
            client.write(message);
            parsed.event = 'in-transit';
            let object = JSON.stringify(parsed);
            // console.log(object);
            client.write(object);
        }, 1000);
    }
    if(parsed.event === 'in-transit'){
        let object = {event: 'DRIVER', payload: `delivered up ${parsed.payload.orderId}`};
        let message = JSON.stringify(object);
        setTimeout(() => {
            client.write(message);
            parsed.event = 'delivered';
            let object = JSON.stringify(parsed);
            // console.log(object);
            client.write(object);
        }, 3000);
    }

})
