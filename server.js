const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');

// Database url connection
const { mongoUrl } = require('./config');

// Server routes
const authRoutes = require('./routes/auth');
const { db } = require('./models/User');

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
app.use(bodyParser.json()); // Data parsing
app.use(express.urlencoded({ extended: false }));
app.use(morgan('tiny')); // HTTP logger
app.use(cors());

// routes middlewares
app.use('/api', authRoutes);

// start the server
app.listen(PORT, async () => {
    console.log('listening on port ' + PORT);
});