const User = require('../models/users')

class UserController{
    // [GET] /user
    index(req, res, next){

        Promise.all([User.find({}), User.countDocumentsDeleted()])
            .then(([users, count]) => {
                users = users.map(user => user.toObject())

                res.render('user', {users, count})
            })
            .catch(next)  // (next) = (err => next(err))
    }

    // [GET] /user/trash
    trash(req, res, next){
        User.findDeleted({})
            .then(users => {
                users = users.map(user => user.toObject())
                res.render('users/trash', {users})
            }) // {courses} = {courses: courses}
            .catch(next)  // (next) = (err => next(err))
    }

    // [GET] /user/:slug
    showDetails(req, res, next){
        User.findById(req.params.id)
            .then(user => {

                // res.json(user)
                user = user.toObject()
                res.render('users/userDetails', {user})
            })
            .catch(next)
    }

    // [GET] /user/create
    create(req, res, next){
        res.render('users/create')
    }
    // [POST] /user/store
    store(req, res, next){
        const formData = req.body
        const user = new User(formData)
        user.save()
            .then(() => res.redirect('/user'))
    }

    // [GET] /user/:id/edit
    edit(req, res, next){
        User.findById(req.params.id)
            .then(user => {
                user = user.toObject()
                res.render('users/edit', {user})
            })
        
    }

    // [PUT] /user/:id
    update(req, res, next){
        const newUserInfo = req.body
        User.findByIdAndUpdate(req.params.id, newUserInfo)
            .then(() => res.redirect('/user'))
            .catch(next)
    }

    // [DELETE] /user/:id
    delete(req, res, next){
        User.deleteById(req.params.id)
            .then(() => res.redirect('/user'))
            .catch(next)
    }

    // [DELETE] /user/all
    deleteAll(req, res, next){
        User.delete({deleted: false})
            .then(() => res.redirect('/user'))
            .catch(next)
    }
    // [DELETE] /user/options/delete

    optionsDelete(req, res, next){
        User.delete({_id: {$in : req.body.userIds}})
            .then(() => res.redirect('/user'))
            .catch(next)

        //res.json(req.body)
    }

    // [DELETE] /user/:id/force
    deleteForce(req, res, next){
        User.findByIdAndDelete(req.params.id)
            .then(() => res.redirect('/user/trash'))
            .catch(next)
    }

    // [PATCH] /user/:id/restore
    restore(req, res, next){
        User.restore({_id: req.params.id})
            .then(() => res.redirect('/user/trash'))
            .catch(next)
    }
}

module.exports = new UserController
