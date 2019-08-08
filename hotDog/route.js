const express = require('express');
const router = express.Router();
const actions = require('./controller');

router
    .route('/hotDog')
    .post(actions.add)
    .get(actions.get)
    .put(actions.put)
    .delete(actions.delete)
    
module.exports = router;