const express = require('express')
const helmet = require('helmet')
const cookieParser = require('cookie-parser')
const expressSession = require('express-session')

const app = express()
const log = console.log
const port = 8080

app.use(helmet())
app.use(cookieParser())

app.use(express.static('client'))

app.listen(port, () => console.log(`App listening on port ${port}!`))