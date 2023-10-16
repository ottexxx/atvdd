const express = require("express");
const router  =  require('./routes')
require("./database/index");

const app = express();
const exphbs = require("express-handlebars")
app.use(express.json());
app.use(router);

app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');


app.get('/', (req, res )=>{
    return res.render('min')
})

app.listen(3333, console.log("servidor on na porta 3333"));