'use strict';

const events = require('./event.js');
const vendor = require('./vendor.js');
const driver = require('./driver.js');

events.on('pickup', payload => logger('pickup',payload));
events.on('in-transit', payload => logger('in-transit',payload));
events.on('delivered', payload => logger('delivered',payload));
vendor();

function logger(crud, payload){
    // console.log(payload);
    console.log('event', {crud, payload})
    // console.log(`EVENT { event: ${crud}, time: ${payload}, payload: {store : ${payload.store}, id: ${payload.id}, 
    // customer: ${payload.customer}, address: ${payload.address}}}`)
};