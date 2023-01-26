
const marvel = require('../models/marvel.js');
exports.Read= ((req,res)=>{
      
    res.send("hello read");
})

exports.Sort= ((req,res)=>{
    res.send("hello Filter");
})

exports.Search= ((req,res)=>{
    res.send("hello Search");
})

exports.SignIn= ((req,res)=>{
    res.send("hello SignIn");
})

exports.Insert= ((req,res)=>{
    res.send("hello insert");
})

