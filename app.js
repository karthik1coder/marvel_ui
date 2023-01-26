const express = require('express');
const app = express();

//routing to respective routes..
const ReadRoute = require('./routes/Read');
const InsertRoute=require('./routes/Insert');
const SearchRoute=require('./routes/Search');
const SignInRoute= require('./routes/SignIn');
const SortRoute= require('./routes/Sort');

const bodyParser = require('body-parser');
const cors=require("cors");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const corsOptions ={
    origin:'*', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200,
 }
 
 app.use(cors(corsOptions))

app.use("/api/Read",ReadRoute);

app.use("/api/Insert",InsertRoute);

app.use("/api/Search",SearchRoute);

app.use("/api/SignIn",SignInRoute);

app.use("/api/Sort",SortRoute);


module.exports=app;