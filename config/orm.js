var connection = require('./connection.js');

var orm = {
    select: function(columnSearch, tableInput, cb) {
        var queryString = 'SELECT ?? FROM ??';
        connection.query(queryString, [columnSearch, tableInput], function(err, result) {
            if(err) throw err;
            // console.log(result);
            //pass into cb function the result parameter of the mysql query
            cb(result)
        })
    },
    //objValues will be in format {burger_name: name, devoured: true}
    insert: function(tableInput, objValues, cb) {
        var queryString = 'INSERT INTO ?? SET ?';
        connection.query(queryString, [tableInput, objValues], function(err, result) {
            if(err) throw err;
            // console.log(result);
            //pass into cb function the result parameter of the mysql query
            cb(result)
        });
    },
    update: function(table, updateObj, condition, id, cb) {
        // update variable in format updateObj = {burger_name: name, devoured: devoured}
        //condition is column searched for (most likely table index)
        var queryString = 'UPDATE ?? SET ? WHERE ?? = ?';
        connection.query(queryString, [table, updateObj, condition, id], function(err, result) {
            if(err) throw err;
            // console.log(result)
            //pass into cb function the result parameter of the mysql query
            cb(result);
        });
    }
}

module.exports = orm;