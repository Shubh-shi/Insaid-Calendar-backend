const express = require("express")
const app = express()


const port = process.env.PORT
app.listen(port, 
()=> console.log(`Server Started on port ${port}...`))


app.use(express.json())

var register = require('./register');

// var login = require('login');
//middleware to read req.body.<params>

//CREATE USER
app.post("/createUser", register);
    
// app.post("/login", login);