const express = require('express')
const bodyParser = require('body-parser')
/*rotte 
da 
importare*/

const app = express()

app.use(bodyParser.json())

/*rotte da utilizzare
app.use('...', rotta)
*/

app.get('/', (req, res)=>{
    res.send({mesage: 'api di root non implementata'})
})

module.exports = app


