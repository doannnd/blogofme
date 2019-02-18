/**
 * @author NGUYEN DINH DOAN
 * @since 2/18/2019
 * 
 * blog controllers
 */
var express = require('express');

var router = express.Router();

router.get('/', function(req, res){
    res.send('This is Blog page');
});

module.exports = router;