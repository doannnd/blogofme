/**
 * @author NGUYEN DINH DOAN
 * @since 2/18/2019
 * 
 * index controllers
 */
var express = require('express');

var router = express.Router();

var admin = require(__dirname + '/admin');
var blog = require(__dirname + '/blog');

router.use('/admin', admin);
router.use('/blog', blog);

router.get('/', function(req, res) {
    res.render('signup');
})

module.exports = router;