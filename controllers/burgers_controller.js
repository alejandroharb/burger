var express = require('express');
var router = express.Router();
//import burger models
var burger = require('../models/burger.js');

router.get('/', function(req, res) {
    burger.selectAll(function(data) {
        var obj = {burgers: data}
        console.log(obj);
        res.render('index', obj)
    });
});

router.put('/:id', function(req, res) {
    var id = req.params.id;
    burger.updateOne({devoured: req.body.devoured}, id, function(data) {
        res.redirect('/');
    })
});

router.post('/', function(req, res) {
    var data = {
            burger_name: req.body.name,
            devoured: 0
    }
    burger.insertOne(data, function() {
        res.redirect('/');
    });
})


//exports routes for server.js
module.exports = router;