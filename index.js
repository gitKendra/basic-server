const express = require('express')
var cors = require('cors')
const app = express()
const port = process.env.PORT || 3000

app.use(cors())
app.options('*', cors()) // enable pre-flight across the board
// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
//   });

app.get('/', (req, res) => res.send('Hello World!'))
app.post('/', (req, res) => {
    console.log(req.params)
    res.json(req.params)
})
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
