const mongoose = require('mongoose');
const keys = require("./dev");
const options = {
    reconnectTries: Number.MAX_VALUE,
    reconnectInterval: 1000,
    useNewUrlParser: true
};

const mLab = keys.mongoURI;
mongoose.connect(
    mLab,
    options
);

module.exports = mongoose.connection;
