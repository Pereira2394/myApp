var express = require('express');

var app = express();

app.set('view engine', 'ejs');

//Routes
var routes = require('./routes');

var path = require('path'); 
app.use(express.static(path.join(__dirname, 'public')));


//home
app.get('/', routes.home);

//Manuel Antonio
app.get('/placeSingle/:placeSingle?',routes.placeSingle);

//Not Found
app.get('*', routes.notFound);

app.listen(process.env.PORT || 3000);