const mongoose = require('mongoose')
mongoose.Promise = global.Promise
module.exports = mongoose.connect(proccess.env.MONGO_URL || 'mongodb://localhost/todo')