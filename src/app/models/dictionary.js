const mongoose = require('mongoose')
const Schema = mongoose.Schema
const mongooseDelete = require('mongoose-delete')


const Dictionary = new Schema({
    symbol: {type: String, default: 'ca'},
    name: {type: String, default: 'Calcium'},
},{
    // Make Mongoose use Unix time (seconds since Jan 1, 1970)
    timestamps: true
  })

//   add plugins
Dictionary.plugin(mongooseDelete, { overrideMethods: 'all' });


module.exports = mongoose.model('Dictionary', Dictionary)