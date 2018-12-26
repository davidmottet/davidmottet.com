const express = require('express')
const helmet = require('helmet')
const cookieParser = require('cookie-parser')
const expressSession = require('express-session')
const privateKey  = fs.readFileSync('sslcert/host.key', 'utf8');
const certificate = fs.readFileSync('sslcert/host.crt', 'utf8');

const credentials = {key: privateKey, cert: certificate};

const https = require('https');
const http = require('http');

const app = express()
const log = console.log

app.use(helmet())
app.use(cookieParser())

app.use(express.static('client'))

http.createServer(app).listen(8080)
https.createServer(credentials, app).listen(8443)