const http = require('http');
const colors = require('colors');

const handleServer = function (req, res) {
    res.writeHead('200', {'content-type': 'text/html'})
    res.write('<h1>HTTP Server test project in NodeJS</h1>');
    res.write('<p>This project was only for testing porpuses of HTTP Server <br> Its incomplete/outdated!!</p> <br> - Jeft.')
    res.end();
}

const server = http.createServer(handleServer);

server.listen(80, function(){
    console.log(' ')
    console.log(' ')
    console.log(' ')
    console.log('#########################################'.red)
    console.log('Hey There!, It Works.'.green)
    console.log('Server On Port 80 (Default) @ 127.0.0.1'.green)
    console.log('HTTP Server-side test project by Jeft'.green)
    console.log('#########################################'.red)
    console.log(' ')
    console.log(' ')
    console.log(' ')
});