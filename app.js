'use strict'

const express = require('express')
const bodyParser = require('body-parser')

const app = express();
const port = process.env.port || 4000;
const server = require('http').Server(app);        //
const io = require('socket.io')(server)            //

app.use(express.static('public'))

// app.use(bodyParser.urlencoded({extended:false}))
// app.use(bodyParser.json())

//  ---services and router
// const service = require('./api/services');
// app.use('/',service)


app.get('/', (req, res)=>{
    res.status(200).send({message:'hello wordl'})
})

io.on('connection',(socket)=>{
    console.log('alguien se a conectado con sockets');
    socket.emit('news', { hello: 'world' });
    socket.on('my other event', function (data) {
      console.log(data);
    });
})



server.listen(port,()=>{
    console.log({message:`api-rest running in port: localhost${port}`})
})

module.exports = app;