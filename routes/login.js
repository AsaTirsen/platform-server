const express = require('express');
const router = express.Router();
const login = require('../models/login');



router.get('/:id', function(req, res, next) {
    login.getUserName(res, req.params.id);
});

router.post('/', function (req, res) {
    login.checkLogin(res, req.body);
});

module.exports = router;
