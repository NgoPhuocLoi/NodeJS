const mongoose = require('mongoose')
const Schema = mongoose.Schema
const mongooseDelete = require('mongoose-delete')


const User = new Schema({
    name: {type: String, default: 'user-name'},
    age: {type: Number, min:1},
    job: {type: String},
    avtUrl: {type: String},
    address: {type: String},
    email: {type: String},
    phone: {type: String},
},{
    // Make Mongoose use Unix time (seconds since Jan 1, 1970)
    timestamps: true
  })

//   add plugins
User.plugin(mongooseDelete, { overrideMethods: 'all' });


module.exports = mongoose.model('User', User)