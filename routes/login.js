const express = require('express');

const router = express.Router();

const UserModel = require('../models/user');


verifyUser = (res, email) => {

}

router.get('/verify:email', (req, res) => {

    const email = req.params;

    verifyUser(res, email);
});

router.get('/verify', (req, res) => {
    res.send('verify route');
});

module.exports = router;