const mongoose = require('mongoose')
const Schema = mongoose.Schema
const mongooseDelete = require('mongoose-delete')


const Formula = new Schema({
    name: {type: String, default: '1 + 1 = 2'},
    type: {type: String, default: '1'},
},{
    // Make Mongoose use Unix time (seconds since Jan 1, 1970)
    timestamps: true
  })

//   add plugins
Formula.plugin(mongooseDelete, { overrideMethods: 'all' });


module.exports = mongoose.model('Formula', Formula)