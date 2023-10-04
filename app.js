const express = require('express');
const mongoose = require("mongoose");
const app = express();
const bodyParser = require("body-parser")
const cors = require('cors')
require('dotenv').config();
app.use(bodyParser.urlencoded({ extended: true }));
require('./database/connection');
app.use(cors())


app.use(express.json());

app.use(require('./router/auth'));

const PORT = process.env.PORT ;

app.listen(PORT, ()=>{
    console.log(`server is running at port number ${PORT} `)
 });