/**
 * @author NGUYEN DINH DOAN 
 * @since 2/17/2019
 * 
 * used to config blog application
 */

 var express = require('express');
 var config = require('config');
 var bodyParser = require('body-parser');

 var app = express();

 // use body-parser
 app.use(bodyParser.json());

 var port = config.get('server.port');
 var host = config.get('server.host');

 // use template engine ejs
 app.set('views', __dirname + '/apps/views');
 app.set('view engine', 'ejs');

 // use static file
 app.use('/static', express.static(__dirname + '/public'));

 // use controller
 var controllers = require(__dirname + '/apps/controllers');
 app.use(controllers);
 
 app.listen(port, function() {
    console.log('Server is running on port ', port);
})