const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');

const app = express();

// Middleware
app.use(bodyParser.json());

// Rotte
app.use('/auth', authRoutes);
app.get('/', (req,res) => {
    res.send({message: 'api di root non implementata'})
})

module.exports = app;
