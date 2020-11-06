const {Router} = require('express');
const router = Router();
const transactions = require('../models/transactions');



router.post('/', function (req, res) {
    transactions.withdrawal(res, req.body.items);
});


module.exports = router;

