require("dotenv").config();
const express = require('express');
const helmet = require('helmet');   
const cors = require('cors');

//routers
const notesRouter = require('../database/notesdb/notesdb-router.js')

//server instance
const server = express();

//middleware
server.use(express.json()); //built into express
server.use(cors()); //node module
server.use(helmet()); //node module

//routes
server.use('/api/notes', notesRouter);

//Server check
server.get('/', (req, res) =>{
    res.status(200).json({message: 'Server up and running'})
})

//export module
module.exports = server;
