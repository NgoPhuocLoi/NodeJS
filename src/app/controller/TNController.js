const TN = require('../models/TN')

class TNController{
    // [GET] /TN
    index(req,res, next){
        Promise.all([TN.find({}), TN.countDocumentsDeleted()])
            .then(([TNs, count]) => {
                TNs = TNs.map(TN => TN.toObject())

                res.render('TN', {TNs, count})
            })
            .catch(next)  // (next) = (err => next(err))
        
    }

    // [GET] /TN/edit
    edit(req,res, next){
        Promise.all([TN.find({}), TN.countDocumentsDeleted()])
            .then(([TNs, count]) => {
                TNs = TNs.map(TN => TN.toObject())

                res.render('TN/edit', {TNs, count})
            })
            .catch(next)  // (next) = (err => next(err))
        
    }

    // [GET] /TN/create
    create(req, res, next){
        res.render('TN/create')
    }

    // [POST] /TN/store
    store(req, res, next){
        const formData = req.body
        const ThiNghiem = new TN(formData)
        ThiNghiem.save()
            .then(() => res.redirect('/TN/edit'))
    }

    // [DELETE] /TN/:id/force
    deleteForce(req, res, next){
        TN.findByIdAndDelete(req.params.id)
            .then(() => res.redirect('/TN/edit'))
            .catch(next)
    }
    // [GET] /:slug
    // send(req,res){
    //     res.send('hello')
    // }
}


module.exports =new TNController;