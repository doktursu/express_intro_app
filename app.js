var express = require('express');
var app = express();
var expressLayouts = require('express-ejs-layouts');

var orchidRouter = require('./controllers/orchidRouter');

app.set('views', './views');
app.set('view engine', 'ejs');

app.use(expressLayouts);
app.use(express.static(__dirname + '/public'));
app.use('/orchids', orchidRouter);

app.get('/', function (req, res) {
    res.render('index', {
        title : 'Orchids'
    });
});

app.listen('3000', function(){
    console.log('Running on port 3000');
});