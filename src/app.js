const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');
const config = require('./config/config')
const sequelize = require('./config/database') 
const app = express();

sequelize.sync({ alter:true })
console.log('All models successfully syncronized')

app.use(express.json())

app.get('/', (req, res) => {
    res.send({message: 'api di root non implementata'})
})


app.use('/auth', authRoutes);


module.exports = app;

app.listen(3000, (req, res)=>{
    console.log('server in ascolto alla porta 3000')
})

