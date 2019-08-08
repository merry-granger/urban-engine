exports.errorSend = (err, res, code, message) => {

    res
           .status(code)
           .contentType("text/plain")
           .end(message+`: ${err.name} ${err}`);
};

exports.messageSend = (res, code, message) => {

    res
           .status(code)
           .contentType("text/plain")
           .end(message);
};
exports.objectSend = (res, code, object) => {

    res
           .status(code)
           .contentType("text/plain")
           .send(object);
};
