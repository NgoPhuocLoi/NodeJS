const Dictionary = require('../models/dictionary')

class DictionaryController{
    // [GET] /chemicalEqt
    index(req,res, next){
        // Promise.all([ChemicalEqt.find({}), ChemicalEqt.countDocumentsDeleted()])
        //     .then(([chemicalEqts, count]) => {
        //         chemicalEqts = chemicalEqts.map(chemicalEqt => chemicalEqt.toObject())

        //         res.render('chemicalEqt', {chemicalEqts, count})
        //     })
        //     .catch(next)  // (next) = (err => next(err))
        res.render("dictionary")
        
    }
    

    // //[GET] /flashcard/edit
    edit(req,res, next){
        
        Dictionary.find({})
            .then((dictionaries) => {
                dictionaries = dictionaries.map(dictionary => dictionary.toObject())

                res.render('dictionary/edit', {dictionaries})
                // res.json(chemicalEqts)
            })
            .catch(next)  // (next) = (err => next(err))
        
    }

    // [GET] /chemicalEqt/search
    search(req,res,next){
        const data = req.query
        const searchString = data.symbol.toLowerCase()
        console.log(searchString)

        Dictionary.find({symbol: searchString})
            .then(result => {
                console.log(result)

                    let item = result[0]
                    let newData
                    if(item){
                        item = item.toObject()
                        let newSymbol = item.symbol[0].toUpperCase()
                        let newName = item.name[0].toUpperCase()
                        newSymbol = item.symbol.replace(item.symbol[0], newSymbol)
                        newName = item.name.replace(item.name[0], newName)
                        newData = {
                            symbol: newSymbol,
                            name: newName
                        }
                        console.log(newSymbol)
                    }else{
                        newData = {
                            name: "Not found"
                        }

                    }
                    res.render("./dictionary/result", {newData})

                
            })
            .catch(next)
        
        // ChemicalEqt.find({})
        //     .then(results => {
        //         results.forEach(result => {
        //             reagentDB.push(result.reagent.replace(/{/gi, '').replace(/}/gi, '').replace(/\t/gi, '').replace(/\(\d+\)/g, '').replace(/\+/g, ' + ').replace(/ +/g, ' ').toLowerCase().split(' '))
        //             productDB.push(result.product.replace(/{/gi, '').replace(/}/gi, '').replace(/\t/gi, '').replace(/\(\d+\)/g, '').replace(/\+/g, ' + ').replace(/ +/g, ' ').toLowerCase().split(' '))
        //             ids.push(result._id)
        //         })
        //         console.log(reagentDB, productDB)
        //         console.log(reagent, product)
        //         console.log(reagent[0] ==='', product[0] ==='')
        //         if(reagent[0] !=='' && product[0] !==''){
        //             const id_1=[], id_2 = []
        //             reagentDB.forEach((reagents, index) => {
        //                 if(reagent.every(item => reagents.includes(item))){
        //                     id_1.push(ids[index])
        //                 }
        //             })
        //             productDB.forEach((products, index) => {
        //                 if(product.every(item => products.includes(item))){
        //                     id_2.push(ids[index])
        //                 }
        //             })
        //             id_1.forEach(id => {
        //                 if(id_2.includes(id)) newID.push(id)
        //             })
                    
        //         }else{
        //             reagentDB.forEach((reagents, index) => {
        //                 if(reagent.every(item => reagents.includes(item))){
        //                     newID.push(ids[index])
        //                 }
        //             })
        //             productDB.forEach((products, index) => {
        //                 if(product.every(item => products.includes(item))){
        //                     newID.push(ids[index])
        //                 }
        //             })
        //         }
                
        //         return newID
        //     })
        //     .then(IDs => {
        //         return ChemicalEqt.find({_id: {$in : IDs}})
                
        //     })
        //     .then((results) => {
        //         results = results.map(result => result.toObject())
        //         res.render('./chemicalEqt', {results})
        //         // res.json(results)
        //     })
        //     .catch(next)

    }

    // [POST] /flashcard/store
    store(req, res, next){
        const formData = req.body
        const dictionary = new Dictionary(formData)
        dictionary.save()
            .then(() => res.redirect('/dictionary/edit'))
    }

    // [DELETE] /user/:id/force
    deleteForce(req, res, next){
        Dictionary.findByIdAndDelete(req.params.id)
            .then(() => res.redirect('/dictionary/edit'))
            .catch(next)
    }
    // [GET] /chemicalEqt/:id/change
    // change(req, res, next){
    //     ChemicalEqt.findById(req.params.id)
    //         .then(eqt => {
    //             eqt = eqt.toObject()
    //             // res.json(eqt)
    //             res.render('chemicalEqt/change', {eqt})
    //         })
    //         .catch(next)
    //     // res.send(req.params.id)
        
    // }

    // [PUT] /chemicalEqt/:id
    // update(req, res, next){
    //     const newChemicalEqt = req.body
    //     ChemicalEqt.findByIdAndUpdate(req.params.id, newChemicalEqt)
    //         .then(() => res.redirect('/chemicalEqt/edit'))
    //         .catch(next)
    // }
}


module.exports =new DictionaryController;