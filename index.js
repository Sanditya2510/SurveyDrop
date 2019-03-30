const express = require('express')
const mongoose = require('mongoose')
const cookieSession = require('cookie-session')
const passport = require('passport')
const bodyParser = require('body-parser')
const keys = require('./config/keys')
require('./models/users')
require('./models/survey')
require('./services/passport')

const app = express()

app.use(bodyParser.json())
app.use(
    cookieSession({
        maxAge: 30*24*60*60*1000,
        keys: [keys.cookieKey ]
    })
)
app.use(passport.initialize())
app.use(passport.session())

require('./routes/authroutes')(app)
require('./routes/billingroutes')(app)
require('./routes/surveyroutes')(app)

mongoose.connect(keys.mongoURI);

app.listen(5000) 