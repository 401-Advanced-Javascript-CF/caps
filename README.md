# LAB - Class 13

## Project: OAuth Discord

### Author: Bryant Davis

## Links and Resources

- [GitHub](https://github.com/401-advanced-javascript-MichaelEclavea/OAuth)


## Setup

### `.env` requirements (where applicable)
No additional packages required


### How to initialize/run your application (where applicable)

### command lines
- `nodemon`

```
[nodemon] starting `node caps.js`
event {
  crud: 'pickup',
  payload: Store {
    store: 'blah cookies',
    orderId: 'fbb50e8e-c88a-4b09-b4f3-4b22e873011e',
    time: 2020-11-03T07:59:57.732Z,
    customer: 'Cait',
    address: '123 fake boulevard Seattle'
  }
}
DRIVER: picked up fbb50e8e-c88a-4b09-b4f3-4b22e873011e
event {
  crud: 'in-transit',
  payload: Store {
    store: 'blah cookies',
    orderId: 'fbb50e8e-c88a-4b09-b4f3-4b22e873011e',
    time: 2020-11-03T07:59:57.732Z,
    customer: 'Cait',
    address: '123 fake boulevard Seattle'
  }
}
DRIVER: delivered up fbb50e8e-c88a-4b09-b4f3-4b22e873011e
event {
  crud: 'delivered',
  payload: Store {
    store: 'blah cookies',
    orderId: 'fbb50e8e-c88a-4b09-b4f3-4b22e873011e',
    time: 2020-11-03T07:59:57.732Z,
    customer: 'Cait',
    address: '123 fake boulevard Seattle'
  }
}
Thank you for delivering fbb50e8e-c88a-4b09-b4f3-4b22e873011e
```
## Tests
```
caps[class16 !?]$ npm test caps.test.js

> caps@1.0.0 test /home/bryant/codefellows/401/caps
> jest --coverage --verbose "caps.test.js"

 PASS  ./caps.test.js
  testing consoles
    ✓ testing that no console has been called (2 ms)
    ✓ testing if the console has been called

-----------|---------|----------|---------|---------|-------------------
File       | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
-----------|---------|----------|---------|---------|-------------------
All files  |   71.43 |      100 |   36.36 |   70.59 |                   
 driver.js |   33.33 |      100 |       0 |   33.33 | 9-12,19-21        
 event.js  |     100 |      100 |     100 |     100 |                   
 vendor.js |   82.61 |      100 |   57.14 |   81.82 | 31-32,39-40       
-----------|---------|----------|---------|---------|-------------------
Test Suites: 1 passed, 1 total
Tests:       2 passed, 2 total
Snapshots:   0 total
Time:        0.963 s, estimated 1 s
Ran all test suites matching /caps.test.js/i.
```
## UML
not done


## Change Log
1.2: *converted to socket.io from net. made all adjustment and refactoring. app is currently in a functioning state* - 4 Nov 2020
1.1: *initial lab setup and finished, jsut basic listeners and triggers* - 1 Nov 2020
