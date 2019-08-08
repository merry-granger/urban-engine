const actions = require('./crud-actions');

exports.add = (req, res, next) => {
    actions.add(req, res, next)
};
exports.get = (req, res, next) => {
    actions.get(req, res, next)
};
exports.put = (req, res, next) => {
    actions.put(req, res, next)
};
exports.delete = (req, res, next) => {
    actions.delete(req, res, next)
};