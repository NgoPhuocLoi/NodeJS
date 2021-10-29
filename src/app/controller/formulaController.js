const Formula = require('../models/formula')

class FormulaController{
    // [GET] /formula
    index(req,res, next){
        Promise.all([Formula.find({}), Formula.countDocumentsDeleted()])
            .then(([formulas, count]) => {
                formulas = formulas.map(formula => formula.toObject())

                res.render('formula', {formulas, count})
            })
            .catch(next)  // (next) = (err => next(err))
        
    }

    // [GET] /formula/edit
    edit(req,res, next){
        Promise.all([Formula.find({}), Formula.countDocumentsDeleted()])
            .then(([formulas, count]) => {
                formulas = formulas.map(formula => formula.toObject())

                res.render('formula/edit', {formulas, count})
            })
            .catch(next)  // (next) = (err => next(err))
        
    }

    // [GET] /formula/create
    create(req, res, next){
        res.render('formula/create')
    }

    // [POST] /formula/store
    store(req, res, next){
        const formData = req.body
        const formula = new Formula(formData)
        formula.save()
            .then(() => res.redirect('/formula/edit'))
    }

    // [DELETE] /user/:id/force
    deleteForce(req, res, next){
        Formula.findByIdAndDelete(req.params.id)
            .then(() => res.redirect('/formula/edit'))
            .catch(next)
    }
    // [GET] /:slug
    // send(req,res){
    //     res.send('hello')
    // }
}


module.exports =new FormulaController;