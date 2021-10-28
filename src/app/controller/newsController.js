
class NewsController{
    // [GET] /news
    index(req,res){
        res.render('news')
    }
    // [GET] /:slug
    send(req,res){
        res.send('hello')
    }
}


module.exports =new NewsController;