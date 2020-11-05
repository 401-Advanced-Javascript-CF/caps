'use strict';

const client = require('socket.io-client');
// const socket = client('ws://localhost:3001');

const driverSocket = client('ws://localhost:3001/driver');

driverSocket.on('pickup', payload => {
    setTimeout(() => {
        console.log(`picked up ${payload.orderId}`);
        driverSocket.emit('in-transit', payload);
    }, 1000)

});
driverSocket.on('in-transit', payload => {
    setTimeout(() => {
        console.log(`delivered ${payload.orderId}`);
        driverSocket.emit('delivered', payload);
    }, 2000)

});
driverSocket.on('connect', () => {
    console.log('i am connected');
})
// socket.on('pickup', payload => {
//     console.log('i am  connected');
//     console.log(payload);
//     payload.event = 'in-transit';
//     socket.emit('in-transit', payload);
// });