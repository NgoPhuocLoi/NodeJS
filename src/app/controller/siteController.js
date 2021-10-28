

class SiteController{
    // [GET] /home
    index(req, res, next){
        res.render('home')
        
    }

    // [GET] /search
    search(req, res){
        res.render('search')
    }

    // [POST] /search

    result(req, res){
        res.send(req.body.key)
    }

}


module.exports = new SiteController
