'use strict';
const { getuid, geteuid } = require('process');
const event = require('./event.js');


// I totally 100% jacked this from the interwebs
function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }

class Store{
    constructor(store, customer, address){
        this.store = store;
        this.orderId = uuidv4();
        this.time = new Date();
        this.customer = customer;
        this.address = address;
    }
}
const array = [];
const store = new Store('bryant', 'Leah', '123 fake boulevard New York');
array.push(store);
const store2 = new Store('blah cookies', 'Cait', '123 fake boulevard Seattle');
array.push(store2);

function handler(){
    setInterval(() => {
        const number = Math.round(Math.random());
        event.emit('pickup', array[number]);
    }, 5000)
}

event.on('delivered', deliveryHandler);

function deliveryHandler(order){
    setTimeout(() => {
        console.log(`Thank you for delivering ${order.orderId}`);
    }, 500)
}

module.exports = handler;
