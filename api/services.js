'use strict'

const express = require('express')

const router = express.Router();

router.get('/home',(req, res)=>{
    res.status(200).send({message:'api-res runing -socket.io'})
})

module.exports= router;