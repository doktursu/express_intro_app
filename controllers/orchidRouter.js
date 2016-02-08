var Orchid = require('../models/orchid');
var List = require('../models/listModel');

var bartholina = new Orchid('Bartholina', 'https://upload.wikimedia.org/wikipedia/commons/8/8e/Bartholina_burmanniana.jpg');

var oncidium = new Orchid('Oncidium', 'https://upload.wikimedia.org/wikipedia/commons/1/1c/Oncidium_excavatum_RTBG.jpg');

var mormodes = new Orchid('Mormodes', 'https://upload.wikimedia.org/wikipedia/commons/3/30/Mormodes_buccinator_-_infl_3.jpg');

var coryanthes = new Orchid('Coryanthes', 'https://upload.wikimedia.org/wikipedia/commons/3/33/Coryanthes_verrucolineata_Orchi_02.jpg');

var tolumnia = new Orchid('Tolumnia', 'https://upload.wikimedia.org/wikipedia/en/8/8a/Tolvelutina.jpg');

var orchids = [bartholina, oncidium, mormodes, coryanthes, tolumnia];

var orchidsList = new List(orchids);


var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended : false }));

// INDEX
router.get('/', function (req, res) {
    res.render('orchids/index', {
        orchids : orchidsList.getItems()
    });
});

// NEW
router.get('/new', function (req, res){
    res.render('orchids/new', {
        orchid : new Orchid()
    });
});

// CREATE
router.post('/', function (req, res) {
    var orchid = new Orchid(req.body.name, req.body.img);
    orchidsList.addItem(orchid);
    res.redirect('/orchids');
});

// SHOW
router.get('/:id', function (req, res) {
    var id = req.params.id
    res.render('orchids/show', {
        orchid : orchidsList.getItemAt(id),
        id : id
    });
});

// EDIT
router.get('/:id/edit', function (req, res) {
    var id = req.params.id;
    res.render('orchids/edit', {
        orchid : orchidsList.getItemAt(id),
        id : id
    });
});

// UPDATE
router.post('/:id', function (req, res) {
    var id = req.params.id;
    var orchid = orchidsList.getItemAt(id);
    orchid.setName(req.body.name);
    orchid.setImg(req.body.img);
    res.redirect('/orchids');
});

// DELETE
router.post('/:id/delete', function (req, res) {
    var id = req.params.id;
    orchidsList.removeItemAt(id);
    res.redirect('/orchids');
});

module.exports = router;



