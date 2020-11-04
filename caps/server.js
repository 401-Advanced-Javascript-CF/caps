'use strict';

const net = require('net');
const port = 3000;


// const events = require('./event.js');
// const driver = require('../driver/driver.js');

// events.on('pickup', payload => logger('pickup',payload));
// events.on('in-transit', payload => logger('in-transit',payload));
// events.on('delivered', payload => logger('delivered',payload));
// const vendor = require('../vendor/vendor.js');

// function logger(crud, payload){
//     console.log('event', {crud, payload})
// };
function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
}
let pool = {};
const server = net.createServer();
server.listen(port, () => console.log(`Server live on port:${port}`));

server.on('connection', socket => {
    const id = uuidv4();
    pool[id] = socket;

    // data being sent from the client to be broadcasted
    socket.on('data', buffer => dispatch(buffer))
    // if an error occurs with the server, send out the error
    socket.on('error', (e) => { console.log('SOCKET ERROR', e); });
    // upon closure of the server delete the socket
    socket.on('end', (e) => { delete socketPool[id]; });

    //testing
    // broadcast({event: 'delivered', payload: {
    //     store: 'blah cookies',
    //     orderId: 'fbb50e8e-c88a-4b09-b4f3-4b22e873011e',
    //     time: '2020-11-03T07:59:57.732Z',
    //     customer: 'Cait',
    //     address: '123 fake boulevard Seattle'
    //   }});
})

function dispatch(buffer) {
    let message = JSON.parse(buffer.toString().trim());
    broadcast(message);
}

function broadcast(message) {
    let object = {'event': message.event, payload: message.payload};
    let payload = JSON.stringify(object);
    console.log(payload);
    for (let socket in pool) {
      pool[socket].write(payload);
    }
  }
