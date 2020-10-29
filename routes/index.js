const {Router} = require('express');
const router = Router();
const transactions = require('../models/transactions');



router.get('/', function (req, res) {
  transactions.getBalance(res, "1");
});

module.exports = router;

