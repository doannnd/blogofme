/**
 * @author NGUYEN DINH DOAN
 * @since 2/18/2019
 * 
 * common database
 */

var config = require('config');
var mysql = require('mysql');

// config mysql
var connection = mysql.createConnection({
    host: config.get('mysql.host'),
    user: config.get('mysql.user'),
    password: config.get('mysql.password'),
    database: config.get('mysql.database')
});

connection.connect();

/**
 * Used get connnection to mysql
 */
function getConnection() {
    if (!connection) {
        connection.connect();
    }
    return connnection;
}

module.exports = {
    getConnection: getConnection
}