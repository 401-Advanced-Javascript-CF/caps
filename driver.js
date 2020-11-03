'use strict';


const event = require('./event.js');

event.on('pickup', handler);

function handler(order){
    setTimeout(() => {
        // console.log(order);
        console.log(`DRIVER: picked up ${order.orderId}`);
        event.emit('in-transit', order);
    }, 1000)
}

event.on('in-transit', deliverHandler);

function deliverHandler(order){
    setTimeout(() => {
        console.log(`DRIVER: delivered up ${order.orderId}`);
        event.emit('delivered', order);
    }, 3000)
}


