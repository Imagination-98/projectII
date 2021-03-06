const express = require('express')
const morgan = require('morgan')
const path = require('path')
const handlebars  = require('express-handlebars')
const app = express()
const port = 3001
const route=require('./routes')
const db = require('./config/db/index')
const methodOverride = require('method-override')

//Method overide
app.use(methodOverride('_method'))

//Connect DB
db.connect()

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({
  extended: true
}))
app.use(express.json())


//HTTP Logger
app.use(morgan('combined'))

//Template enginee

app.engine('hbs', handlebars({
  extname: '.hbs',
  helpers: {
    sum: (a, b) => a+b,
    nhan:(a, b) => a*b
  }
}))
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'resources','views'))

route(app)

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})