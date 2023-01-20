const { app } = require('./server')
const { getConnections } = require('../../config/DB/connection')
const {logger, logerror } = require('../helpers/logger')
const { variables : { PORT } } = require('../../config')
getConnections().then((message) => {
    logger.info(message)
    app.listen(PORT || 9000, () => {
        logger.info(`el servidor esta escuchando en el puerto ${PORT}`)
    })
    app.on('error', (err) => logerror.error(`se produjo el error ${err} al intentar conectar`))
})