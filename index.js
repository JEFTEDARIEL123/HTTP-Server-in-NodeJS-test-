var express = require('express')
var colors = require('colors')
var app = express()
require('dotenv').config();

app.use(express.static('www'));

var server = app.listen(process.env.PORT, function () {

    var host = server.address().address
    var port = server.address().port




    console.log('#############################'.yellow)
    console.log('#     WebServer Online!     #'.yellow)
    console.log('# Insert ur files in ./www/ #'.yellow)
    console.log('#############################'.yellow)
    console.log(' ')
    console.log('Addres And Port:'.green, process.env.ADDRESS, '@'.green, process.env.PORT)
    console.log(' ')
})
