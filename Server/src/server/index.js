const { app } = require('./server')
const { getConnections } = require('../dal/DB/connection')
const {logger, logerror } = require('../helpers/logger')

const PORT = process.env.PORT || 8080

getConnections().then((message) => {
    logger.info(message)
    app.listen(PORT, () => {
        logger.info(`el servidor esta escuchando en el puerto ${PORT}`)
    })
    app.on('error', (err) => logerror.error(`se produjo el error ${err} al intentar conectar`))
})