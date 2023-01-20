const router = require('express').Router();
const { userControllers } = require('../../controllers/index')
const passport = require('passport')


module.exports = routerUsers = () => {
    router        
    .post('/login', passport.authenticate('login', { failureRedirect: '/faillogin' }), userControllers.getLogin)
    .post('/signup', passport.authenticate('signup', { failureRedirect: '/failregister' }), userControllers.postSignup) 
    .post('/logout', userControllers.logoutUser)
    .get('/user', userControllers.getLogedUser)
     
    return router;
};