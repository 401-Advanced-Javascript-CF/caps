'use strict';

const superagent = require('superagent');
const client = require('socket.io-client');
// const socket = client('ws://localhost:3001');

const driverSocket = client('ws://localhost:3001/driver');
const delivery = client('ws://localhost:3002');

driverSocket.on('pickup', payload => {
    setTimeout(() => {
        console.log(`picked up ${payload.orderId}`);
        driverSocket.emit('in-transit', payload);
    }, 1000)

});
driverSocket.on('in-transit', payload => {
        console.log('i have arrived!!!');
        superagent.post(`http://localhost:5050/delivery/${payload.store}/${payload.orderId}`)
        .then(results => {
            // console.log(results);
        })
        .catch(err => console.error(err));
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