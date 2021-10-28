const mongoose = require('mongoose')

async function connect(){
    try{
        await mongoose.connect('mongodb+srv://0796863758loi:0796863758loi@cluster0.usnuu.mongodb.net/myDB?retryWrites=true&w=majority');
        console.log('Connect Successfully')
    }catch(err){
        console.log('Connect Failure')
    }
}

module.exports = {connect}
