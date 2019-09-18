const mongoose = require('mongoose')
const funcSchema = mongoose.Schema({
  name: {type: String, require: true},
  effect: {type: String, require:true},
  return: {type: String, require:true},
  state: {type: Number, default:1}
})
module.exports = mongoose.model('function', funcSchema);