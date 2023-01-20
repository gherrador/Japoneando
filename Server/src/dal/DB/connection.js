const mongoose = require('mongoose');
const { MONGO_URI } = require('../../../config/index')

exports.getConnections = async() => {
    try {
        mongoose.connect(MONGO_URI);
        return 'Connection DB Success!'
      } catch {
        return 'DB connection failed'        
      }
}
