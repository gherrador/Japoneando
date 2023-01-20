/*-------Express---------*/
const express = require('express')
const app = express();
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.set("trust proxy", 1);
/*------FileUpload ------*/ //--> this libraries helps us to upload images in Cloudstory
const fileUpload = require('express-fileupload')
app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: '/tmp/'
}));

/* ----------- Session ------------------ */
const cookieParser = require('cookie-parser')
const session = require('express-session')
const { MONGO_URL } = require('../../config');
const MongoStore = require('connect-mongo')
const advancedOptions = { useNewUrlParser: true, useUnifiedTopology: true };

app.use(cookieParser())
app.use(session({
    store: MongoStore.create({
        mongoUrl: MONGO_URL,
        mongoOptions: advancedOptions
    }),
    cookie: {
        maxAge: 1000 * 60 * 60,
        sameSite: process.env.NODE_ENV === "production" && 'none',
        secure: process.env.NODE_ENV === "production" ? true : false
    },
    name:"nameSession",
    secret: 'session',
    resave: true,
    saveUninitialized: false,
}));

/* ----------- Passport ------------------ */
const passport = require('passport');
app.use(passport.initialize());
app.use(passport.session());
require('../middleware/passport/passport')(passport)

/*-------Routes---------*/
const routerConfig = require('../routes/index');
app.use(routerConfig())

module.exports = { app }

