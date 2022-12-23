const express = require('express')
const hbs = require('express-handlebars')
const path = require('path')
const route = require('./routes')
var morgan = require('morgan')
const app = express()
const port = 3000
const db = require('./db')
db.connect();
app.use(express.urlencoded({
  extended: true
}));
app.use(express.json())
app.use(express.static(path.join(__dirname)))

app.engine('hbs', hbs.engine({ defaultLayout: 'main', extname: '.hbs' }));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname,'./views') );
route(app);
console.log(path.join(__dirname,'./views') )

app.use(morgan('combined'))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})