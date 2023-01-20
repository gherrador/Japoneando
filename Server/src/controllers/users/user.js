const { logger, logerror, logwarn } = require("../../helpers/logger");

const userControllers = () =>{
    return{
        getLogin: (req, res,) => { 
             if (req.isAuthenticated()) {
                if (req.user.admin == true) {
                    const user = req.user
                    res.status(200).send(user);
                } else {
                    logger.info('usuario logeado no es admin')
                    const user = req.user
                    res.status(200).send(user);
                }
            } else {             
                logwarn.warn('usuario no logeado')
            } 
        },
        postSignup: (req, res) => {            
           if (req.isAuthenticated()) {       
                if (req.user.admin == true) {
                    logger.info('usuario logeado');
                    res.redirect("/admin/")
                } else {
                    logger.info('usuario logeado')
                    res.redirect('/')
                }
            } else {
                logerror.error('error al logear usuario')
                res.redirect('/')
            }
        },
        logoutUser:(req, res, next) => {
            req.logout(function(err) {
              if (err) { return next(err); }
              req.session.destroy()
              res.status(200).send(req.user);
            });
          },

          getLogedUser: (req, res) =>{  
            res.status(200).send( req.user)
          }


    }
}

module.exports = userControllers