const mongoose = require('mongoose')
const Schema = mongoose.Schema
const mongooseDelete = require('mongoose-delete')


const TN = new Schema({
  name: {type: String, default: 'abc'},
  class: {type: Number, min:1},
  imgUrl: {type: String},
  videoUrl: {type: String},
},{
    // Make Mongoose use Unix time (seconds since Jan 1, 1970)
    timestamps: true
  })

//   add plugins
TN.plugin(mongooseDelete, { overrideMethods: 'all' });


module.exports = mongoose.model('TN', TN)