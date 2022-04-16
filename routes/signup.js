const express = require('express');

const router = express.Router();

const UserModel = require('../models/User');

createUser = (res, newUser) => {

    newUser.save((error) => {
        if (error) {
            res.status(500).json({
                msg: 'Error, Data not saved to cluster'
            });
            return;
        }

        res.json({
            msg: 'User data saved to cluster.'
        });
    })
};

userExists = (res, newEmail) => {

    let emailToCheck = newEmail['email'];

    UserModel.find({ email: emailToCheck })
        .then((data) => {

            let amount = Object.keys(data).length;

            if (amount) {

                res.send(true);

            } else {

                res.send(false);
            }
        })
        .catch((error) => {

            if (error) {
                res.send(error);
            }
        })
};

// Get request route for testing
router.get('/data', (req, res) => {

    UserModel.find({})
        .then((data) => {

            res.send(data);
        })
        .catch((error) => {

            res.send(error);
        })
});

// Get request to check if user exists
router.get('/data:email', (req, res) => {

    const newEmail = req.params;

    userExists(res, newEmail);
});

// Saving user data sent from client to our mongoDB cluster
router.post('/save', (req, res) => {

    const data = req.body;

    const newUser = new UserModel(data);

    createUser(res, newUser);
});

module.exports = router;