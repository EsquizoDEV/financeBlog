import express from 'express'
import http from 'http'
import {blogRoutes} from './network/routes.js'


//*Initializing express
const app = express()

//*setup port
const port = normalizePort(process.env.PORT || 9999)
app.set('port', port)

//*SETUP SERVER
const server = http.createServer(app)
server.listen(port)
server.on('error', onError)
server.on('listening', onListening)

blogRoutes(app)


function normalizePort(num) {
    const port = parseInt(num, 10)
    const val = 9999
    if(isNaN(port)){
        return val
    }

    if(port >0){
        return port
    }

    return false
}

function onError(err){
    console.log("Error en el servidor")

    if(err.syscall !== 'listen'){
        throw err
    }
    
    const bind = typeof port === 'string'
    ? 'Pipe' + port
    : 'Port' + port;
    
    switch(err.code){
        case 'EACCESS':
            console.error(bind + ' requieres elevated privileges')
            process.exit(1)
        case 'EADDRINUSE':
            console.error(bind + ' is already in use');
            process.exit(1)
        default:
            throw err;
    }
}

function onListening() {
    const addr = server.address();
    const bind = typeof addr === "string"
    ? 'pipe' + addr
    : 'port ' + addr.port
    console.log(`Listening on ${bind}`)
}
