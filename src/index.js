
const express = require('express')
// const morgan = require('morgan')
const handlebars  = require('express-handlebars')
const path = require('path')
const app = express()
const port = process.env.PORT || 3000;

const route = require('./routes')
const db = require('./config/db')
const methodOverride = require('method-override')

// method overwrite
app.use(methodOverride('_method'))

// connect to DB
db.connect()

// use middleware

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// config static files
app.use(express.static(path.join(__dirname, 'public')))

// HTTP logger
// app.use(morgan('tiny')) // combined, tiny, ...

// template engine
app.engine('hbs', handlebars({
    extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'))


// route init
route(app)

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})