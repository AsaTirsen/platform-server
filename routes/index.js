const {Router} = require('express');
const router = Router();
const transactions = require('../models/transactions');



router.get('/:id', function (req, res) {
  transactions.getBalance(res, req.params.id);
});

module.exports = router;

