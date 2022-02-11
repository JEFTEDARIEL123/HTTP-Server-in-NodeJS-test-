var express = require('express')
var colors = require('colors')
var morgan = require('morgan')
var fs = require('fs');
require('dotenv').config();

   console.log('Starting app...')

var app = express()
   console.log('Loading Config from .env')

if (!fs.existsSync(process.env.FILES)){
    fs.mkdirSync(process.env.FILES, { recursive: true });
}

app.use(express.static('src'));
   
   console.log('Loading web files from /', process.env.FILES, "/")

var server = app.listen(process.env.PORT, function () {

    var host = server.address().address
    var port = server.address().port

    console.log(' ')
    console.log('#############################'.yellow)
    console.log('#                           #'.yellow)
    console.log('#     WebServer Online!     #'.yellow)
    console.log('#                           #'.yellow)
    console.log('#############################'.yellow)
    console.log(' ')
    console.log('Server running on:'.green, process.env.ADDRESS, '@'.green, process.env.PORT)
    console.log(' ')

    app.use(morgan(':date[clf] '.blue + 'ERROR '.red + ':status'.red + ' user/' +  '[' + ':remote-addr' + '] ' + 'Can not' + ' :method' + ' :url'))

    
})
