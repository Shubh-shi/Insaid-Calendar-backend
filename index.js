const express = require("express")
const app = express()
const mysql = require("mysql")

const db= require('./database/db.js')
var cors = require('cors')

require("dotenv").config()


const port = process.env.PORT
app.listen(port, 
()=> console.log(`Server Started on port ${port}...`))
app.use(cors({
    origin: "http://localhost:3000",
    credentials: true,            //access-control-allow-credentials:true
    optionSuccessStatus: 200,
  }))

const loginRoute=require('./routes/login');
const fetchcalendareventRoute=require("./routes/calendar/calendar");
app.use("/login",loginRoute);
app.use("/calendar",fetchcalendareventRoute);



