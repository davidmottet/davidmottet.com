const https = require('https');
const http = require('http');
const fs = require('fs');

const privateKey  = fs.readFileSync('./certs/server.key', 'utf8')
const certificate = fs.readFileSync('./certs/server.crt', 'utf8')

const credentials = {key: privateKey, cert: certificate}

const server = (req, res) => {
	res.end('Hello !')
}

http.createServer(server).listen(8080)
https.createServer(credentials, server).listen(8443)