const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');
const cartRoutes = require('./routes/cartsRoutes')
const config = require('./config/config')
const sequelize = require('./config/database') 
const app = express();

sequelize.sync()
console.log('All models successfully syncronized')

app.use(express.json())

app.get('/', (req, res) => {
    res.send({message: 'api di root non implementata'})
})

// Middleware per gestire il parsing dei JSON
app.use(express.json());

//Usa le rotte per l'autenticazione
app.use('/auth', authRoutes);

// Usa le rotte dei prodotti
app.use('/api', productRoutes);

// Usa le rotte del carrello
app.use('/api', cartsRoutes);

//Usa le rotte degli ordini
app.use('/api', orderRoutes)

module.exports = app;

app.listen(3000, (req, res)=>{
    console.log('server in ascolto alla porta 3000')
})