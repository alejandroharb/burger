var connection = require('./connection.js');

var orm = {
    select: function(columnSearch, tableInput, cb) {
        var queryString = 'SELECT ?? FROM ??';
        connection.query(queryString, [columnSearch, tableInput], function(err, result) {
            if(err) throw err;
            console.log(result);
            cb(results)
        })
    }
    //objValues will be in format {burger_name: name, devoured: true}
    insert: function(tableInput, objValues) {
        var queryString = 'INSERT INTO ?? SET ?';
        connection.query(queryString, [tableInput, objValues], function(err, result) {
            if(err) throw err;
            console.log(result);
        });
    }
    update: function(table, name, devoured, condition, id) {
        // update variable in format update = {burger_name: name, devoured: devoured}
        var queryString = 'UPDATE ?? SET ? WHERE ? = ?';
        connection.query(queryString, [table, update, condition, id], function(err, result) {
            if(err) throw err;
            console.log(result)
        });
    }
}

module.exports = orm;