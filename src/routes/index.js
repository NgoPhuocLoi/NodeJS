const newsRouter = require('./news')
const siteRouter = require('./site')
const userRouter = require('./user')
const formulaRouter = require('./formula')
const TNRouter = require('./TN')
const flashcardRouter = require('./flashcard')
const chemicalEqtRouter = require('./chemicalEqt')
const formula3DRouter = require('./formula3D')

function route(app){
    app.use('/news', newsRouter)

    app.use('/formula', formulaRouter)

    app.use('/formula3D', formula3DRouter)

    app.use('/chemicalEqt', chemicalEqtRouter)

    app.use('/TN', TNRouter)

    app.use('/flashcard', flashcardRouter)

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
