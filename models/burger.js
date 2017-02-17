var orm = require('../config/orm.js');
var express = require('express');

var burger = {
    selectAll: function(cb) {
        //selects all data from burgers table
        orm.select("*", "burgers", function(res) {
            cb(res);
        });
    },
    insertOne: function(objValues, cb) {
        //objValues is object such like {burger_name: name, devoured: true}
        orm.insert("burgers",objValues, function(res) {
            cb(res);
        });
    },
    updateOne: function(updateObj,id, cb) {
        //burgers table, do data update on specified "id"
        orm.update("burgers", updateObj,"id", id, function(res) {
            cb(res)
        })
    }
}

module.exports = burger;