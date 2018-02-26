const express = require('express')
const helmet = require('helmet')
const cookieParser = require('cookie-parser')
const expressSession = require('express-session')

const app = express()

app.use(helmet())
app.use(cookieParser())


var sess = {
	secret: 'davidmottet',
	cookie: {}
}

if (app.get('env') === 'production') {
	app.set('trust proxy', 1)
	sess.cookie.secure = true
}

app.get('/', function (req, res) {
	res.send('Hello World!')
})

app.listen(8080, function () {
	console.log('site listening on port 8080!')
})