const express = require('express');
const app = express();
const hotDog = require('../hotDog/route');


app.use('/api', hotDog);

module.exports = app;
