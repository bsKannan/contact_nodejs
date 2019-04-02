var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var apiRouter =require('./routes')

var app = express();

var port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost/restapi');

var db = mongoose.connection;

app.get('/',(req,res)=>{
    res.send("Hello World")
})

app.use('/api',apiRouter)

app.listen(port,()=>{
    console.log("Server is connected on 3000");
    
})