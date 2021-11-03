const mongoose = require('mongoose')
const Schema = mongoose.Schema
const mongooseDelete = require('mongoose-delete')


const ChemicalEqt = new Schema({
    reagent: {type: String, default: '1 + 1'},
    product: {type: String, default: '2'},
},{
    // Make Mongoose use Unix time (seconds since Jan 1, 1970)
    timestamps: true
  })

//   add plugins
ChemicalEqt.plugin(mongooseDelete, { overrideMethods: 'all' });


module.exports = mongoose.model('ChemicalEqt', ChemicalEqt)