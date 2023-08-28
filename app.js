const express = require('express');
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = express();
    
require('./database/connection');

app.use(express.json());

app.use(require('./router/auth'));

const PORT =5000;

app.listen(PORT, ()=>{
    console.log(`server is running at port number ${PORT} `)
 });