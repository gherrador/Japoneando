const Dao = require("../../dal/Dao")
const model = require('../../models/index')
const passport = require('passport');
const { Strategy: LocalStrategy } = require('passport-local');
const { save } = require('../cloudinary/cloudinary')

module.exports = () => {
    const { userDao } = Dao
    const { userModel } = model
    passport.use('login', new LocalStrategy({ passReqToCallback: true }, async (req, username, password, done) => {
        await userDao.findUser(username, password, done)
    }))
    passport.use('signup', new LocalStrategy({ passReqToCallback: true }, async (req, username, password, done) => {
        const data = req.body
        const photo = req.files.photo
        let photoUser = await save(photo)
        userDao.findOrCreateUser(username, password, data, photoUser.url, done)
    }
    ))
    passport.serializeUser(function (user, done) {
        done(null, {
            name: user.name,
            surname: user.surname,
            phone: user.phone,
            username: user.username,
            photo: user.photo,
            email: user.email,
            admin: user.admin
        });
    });

    passport.deserializeUser(function (user, cb) {
        process.nextTick(function () {
            return cb(null, user);
        });
    });
}
