const express = require('express');
const techRouter = require('./routers/tech.router');

const instance = require('./database').getInstance();
instance.setModel()

const server = express();

server.use(express.urlencoded({extended: true}))
server.use(express.json())


server.use('/tech', techRouter)

server.use('*', (err, req, res, next) => {
res
    .status(err.status || 404)
    .json({
        massage: err.massage | '',
        code: err.customCode | ''
    })
})

server.listen(5002, (e) => {
    if (e) {
        console.log(e)
    }
    console.log('server 5002 is work')
})

