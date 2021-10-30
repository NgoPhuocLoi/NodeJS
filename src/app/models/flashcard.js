const mongoose = require('mongoose')
const Schema = mongoose.Schema
const mongooseDelete = require('mongoose-delete')


const Flashcard = new Schema({
    frontSide: {type: String, default: '1 + 1 = 2'},
    backSide: {type: String, default: '2'},
},{
    // Make Mongoose use Unix time (seconds since Jan 1, 1970)
    timestamps: true
  })

//   add plugins
Flashcard.plugin(mongooseDelete, { overrideMethods: 'all' });


module.exports = mongoose.model('Flashcard', Flashcard)