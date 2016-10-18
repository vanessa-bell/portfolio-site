var express = require('express');
var path = require('path');
var app = express();
var cons = require('consolidate');

require('./server/config/routes.js')(app);
app.engine('html', cons.swig);
app.set('port', (process.env.PORT || 5000));
app.set('view engine', 'html');


app.use(express.static(path.join(__dirname,'/views')));
app.listen(app.get('port'),function() {
	console.log('personal website on 5000');
});
