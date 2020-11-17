'use strict';

require('./server.js');

jest.spyOn(global.console,'log');
jest.useFakeTimers();

describe('testing caps', () => {
    it('is not called', () => {
        expect(console.log).toHaveBeenCalled();
    })

})