const { logger, logerror } = require("../../../helpers/logger")

const userDao =(model, isValidPassword, createHash) => {
    const { userModel } = model
    return {
        findUser: async (username, password, done) => {
            userModel.findOne({ username: username },
                async function (err, user) {
                    if (err)
                        return done(err)
                    if (!user) {
                        logerror.error('usuario no encontrado con el nombre:' + username)
                        return done(null, false)
                    }
                    if (! await isValidPassword(user, password)) {
                        logerror.error('password incorrecto')
                        return done(null, false)
                    }
                    return done(null, user)
                }
            ).lean()
        },
        findOrCreateUser(username, password, data, photo, done) {            
            userModel.findOne({ username: username }, async function (err, user) {
                if (err) {
                    logerror.error('error al registrar:' + err)
                    return done(err)
                }
                if (user) {
                    logerror.error('el usuario ya existe')
                    return done(null, false)
                } else {                   
                    let newUser = new userModel();
                    newUser.name = data.name
                    newUser.surname = data.surname
                    newUser.phone = data.phone
                    newUser.username = username;
                    newUser.password = createHash(password);
                    newUser.photo = photo
                    newUser.email = data.email
                    newUser.save(function(err) {
                        if (err) {
                            logerror.error('error al guardar el usuario:' + err)
                            throw err;
                        }
                        logger.info('usuario registrado exitosamente')
                        return done(null, newUser)
                    })
                }
            })
        }
    }
}

module.exports = userDao