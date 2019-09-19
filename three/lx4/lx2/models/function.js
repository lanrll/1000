const mongoose = require('mongoose');
const schema = mongoose.Schema({
  name: {type: String, require: true, unique: true},
  effect: {type: String, require:true},
  return: {type: String, require:true,default:true},
  state: {type: Number, default:1}
})

module.exports = mongoose.model('function', schema);