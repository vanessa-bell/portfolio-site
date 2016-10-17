var express = require('express');
var path = require('path');
var app = express();
var cons = require('consolidate');

require('./server/config/routes.js')(app);
app.engine('html', cons.swig);
app.set('view engine', 'html');


app.use(express.static(path.join(__dirname,'/views')));
app.listen(8000,function() {
	console.log('personal website on 8000');
});