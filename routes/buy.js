const {Router} = require('express');
const router = Router();
const transactions = require('../models/transactions');



router.post('/', function (req, res) {
    transactions.buy(res, req.body.items);
});


module.exports = router;

