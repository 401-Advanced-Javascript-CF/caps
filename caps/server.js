'use strict';

const io = require('socket.io');
const server = io(3001);

// const io3 = require('socket.io/vendor')
// const vendorServer = io2(3001);

const vendorServer = server.of('/vendor');
const driverServer = server.of('/driver');


server.on('connection', socket => {
  console.log(`Welcome ${socket.id}`);
  socket.on('pickup', payload => {
    server.emit('pickup', payload);
  });

  socket.on('delivered', payload => {
    console.log('EVENT', {event: 'delivered', payload: payload});
    vendorServer.emit('delivered', payload);
  });

});

vendorServer.on('connection', socket => {
  console.log(`Welcome  Vendor: ${socket.id}`);
  socket.on('pickup', payload => {
    console.log('EVENT', {event: 'pickup', payload: payload});
    driverServer.emit('pickup', payload);
  });
})

driverServer.on('connection', socket => {
  console.log(`Welcome  Driver: ${socket.id}`);

  socket.on('in-transit', payload => {
    console.log('EVENT', {event: 'in-transit', payload: payload});
    driverServer.emit('in-transit', payload);
  });




})