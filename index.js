const express = require("express");
const app = express() ;
let Port = 8000;
const db= require("./config/mongoose")
app.use(express.urlencoded({extended:true}) );
// redirecting to routed folder
app.use("/", require("./routes/index") );
app.listen( Port,(err)=>
{
    if(err)
        console.log("there was an error starting the server") ;
        console.log("server is working fine on ",Port ) ;
} ) ; 