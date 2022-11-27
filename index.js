const express = require('express')
const app = express()
const User = require('./models/user');


var bodyParser = require('body-parser')


app.get('/', function (req, res) {
  res.send('Hello World')
})

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use(function (req, res) {
  res.setHeader('Content-Type', 'text/plain')
  res.write('you posted:\n')
  res.end(JSON.stringify(req.body, null, 2))
})

User.sync();
// User.drop();
console.log("The table for the User model was just (re)created!");





app.listen(3000, ()=> {
    console.log("Your App is runnig on Port: 3000")
})