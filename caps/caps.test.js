'use strict';

const events = require('./event.js');
const vendor = require('../vendor/vendor.js');
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
jest.spyOn(global.console,'log');
describe('testing consoles', () => {
    it('testing that no console has been called', () => {
        expect(console.log).not.toHaveBeenCalled();
    })
    it('testing if the console has been called', () => {
    setTimeout(() =>{
            expect(console.log).toHaveBeenCalled();
            expect(console.log).toHaveBeenCalledTimes(100);
        },5000) 
        })
})