const Flashcard = require('../models/flashcard')

class FlashcardController{
    // [GET] /flashcard
    index(req,res, next){
        Promise.all([Flashcard.find({}), Flashcard.countDocumentsDeleted()])
            .then(([flashcards, count]) => {
                flashcards = flashcards.map(flashcard => flashcard.toObject())

                res.render('flashcard', {flashcards, count})
            })
            .catch(next)  // (next) = (err => next(err))
        
    }

    //[GET] /flashcard/edit
    edit(req,res, next){
        Promise.all([Flashcard.find({}), Flashcard.countDocumentsDeleted()])
            .then(([flashcards, count]) => {
                flashcards = flashcards.map(flashcard => flashcard.toObject())

                res.render('flashcard/edit', {flashcards, count})
            })
            .catch(next)  // (next) = (err => next(err))
        
    }


    // // [POST] /flashcard/store
    store(req, res, next){
        const formData = req.body
        const flashcard = new Flashcard(formData)
        flashcard.save()
            .then(() => res.redirect('/flashcard/edit'))
    }

    // // [DELETE] /user/:id/force
    deleteForce(req, res, next){
        Flashcard.findByIdAndDelete(req.params.id)
            .then(() => res.redirect('/flashcard/edit'))
            .catch(next)
    }
    //[GET] /:slug
    // send(req,res){
    //     res.send('hello')
    // }
}


module.exports =new FlashcardController;