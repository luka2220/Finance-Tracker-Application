const express = require('express');

const router = express.Router();

const UserModel = require('../models/user');

// Get request for data
router.get('/data:email', (req, res) => {

    const newEmail = req.params;

    UserModel.find({})
        .then((data) => {

            console.log(`New user email: ${newEmail['email']}\nType: ${typeof(data)}`);

            for (const [key, value] of Object.entries(data)) {

                if (value['email'] === newEmail['email']) {

                    console.log(`User email already exists in database: ${newEmail['email']}`);

                    res.json({
                        'exists': 'true'
                    });

                    break;
                } else {

                    console.log(`User email added database: ${newEmail['email']}`);

                    res.json({
                        'exists': 'false'
                    });

                    break;
                }
            }
        })
        .catch((error) => {

            if (error) {
                res.send(`Error ${error}, ${newEmail}`);
                console.log("Error: " + error);
            }
        })
});

// Saving user data sent from client to our mongoDB cluster
router.post('/save', (req, res) => {

    const data = req.body;

    const NewUser = new UserModel(data);

    NewUser.save((error) => {
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
});

module.exports = router;