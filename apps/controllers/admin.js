/**
 * @author NGUYEN DINH DOAN
 * @since 2/18/2019
 * 
 * admin controllers
 */
var express = require('express');

var router = express.Router();

router.get('/', function(req, res){
    res.send('This is Admin page');
});

module.exports = router;