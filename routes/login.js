const express = require('express');
const router = express.Router();
const login = require('../models/login');



router.get('/', function(req, res, next) {
    login.getUserName(res, req.id);
});

router.post('/', function (req, res) {
    login.checkLogin(res, req.body);
});

module.exports = router;
