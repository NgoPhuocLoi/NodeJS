const newsRouter = require('./news')
const siteRouter = require('./site')
const userRouter = require('./user')
function route(app){
    app.use('/news', newsRouter)

    app.use('/', siteRouter)

    app.use('/search', siteRouter)

    app.use('/user', userRouter)
    // app.post('/', (req, res) => {
    //     res.render('home');
    //     res.send(req.body.key)
    // })

    // app.post('/search', (req, res) => {
    //     res.send(req.body.key);
    // })
}

module.exports = route
