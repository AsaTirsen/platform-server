const {Router} = require('express');
const router = Router();
const transactions = require('../models/transactions');



router.post('/', function (req, res) {
   console.log(req.body.items);
    transactions.sell(res, req.body.items);
});


module.exports = router;

