const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

// Database url connection
const { mongoUrl } = require('./config');

// All Routes
const signupRoute = require('./routes/signup');

// initializing application
const app = express();
const PORT = process.env.PORT || 5000;

// mongodb connection
mongoose.connect(mongoUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
    console.log('DB connection successful');
});

// middlewares
app.use(express.json()); // Data parsing

app.use(express.urlencoded({ extended: false }));

app.use(morgan('tiny')); // HTTP logger

app.use('/signup', signupRoute);

// start the server
app.listen(PORT, async () => {
    console.log('listening on port ' + PORT);
});