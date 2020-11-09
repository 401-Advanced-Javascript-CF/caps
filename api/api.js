'use strict';
const express = require('express');
const app = express();
const client = require('socket.io-client');
const PORT = 5050;
const socket = client.connect('http://localhost:3001');
// const socket = io.connect('http://localhost:3001');

app.use(express.json());

app.post('/delivery/:storeId/:code', (req, res, next) => {
  console.log(req.params.storeId);
    socket.on('connect', () => {
        console.log('i am here in the api server');
        socket.emit('delivered', {store: req.params.storeId, orderId: req.params.storeId});
    })

    res.send(`Order for ${req.params.storeId} with order number ${req.params.code} was devlivered`);
})


app.listen(PORT, () => console.log('listening on ' + PORT))