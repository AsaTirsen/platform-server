const express = require('express');
const router = express.Router();
const register = require('../models/register_user');


router.post('/', function (req, res) {
    register.addUser(res, req.body);
});

module.exports = router;
