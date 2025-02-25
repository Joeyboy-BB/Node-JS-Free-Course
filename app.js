const express = require('express');

/*Use to change color of port*/ 
const chalk = require('chalk'); 

/*Use to create a path to debug on CMD*/
const debug = require('debug')('app');

const morgan = require('morgan');

const app = express();
const port = 3000;

app.use(morgan('combined'));

app.get("/", (req, res) =>{

    res.send("Hello borntoDev");

})

app.listen(port, ()=>{
    console.log("Listening on port %d", port);
})