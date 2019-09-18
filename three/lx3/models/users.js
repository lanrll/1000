const mongoose = require('mongoose')
const userSchema = mongoose.Schema({
  username: {type: String, require: true},
  pwd: {type: String, require: true},
  sex: {type: Number, default: 1},
  age: {type: Number, default: 20},
  status: {type: Number, default: 1},
  height: {type: Number, default: 170}
})
module.exports = mongoose.model('user', userSchema);