const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');
const cartsRoutes = require('./routes/cartsRoutes')
const ordersRoutes = require('./routes/ordersRoutes')
const productsRoutes = require('./routes/productsRoutes')
const categoriesRoutes = require('./routes/categoriesRoutes')
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
app.use('/api/products', productsRoutes);

// Usa le rotte del carrello
app.use('/api/carts', cartsRoutes);

//Usa le rotte degli ordini
app.use('/api/orders', ordersRoutes)

// Usa le rotte delle categorie
app.use('/api/category', categoriesRoutes);

module.exports = app;

app.listen(3000, (req, res)=>{
    console.log('server in ascolto alla porta 3000')
})