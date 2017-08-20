var express = require('express');
var app = express();
var path = require('path');

var port = '3001';
app.set('view.engine', 'ejs');
app.set('views', path.resolve(__dirname));

app.use(express.static(path.resolve(__dirname)));

app.get('/', function(req, res){
	res.render('index.ejs');
});
app.listen(port, function(){
	console.log('SERVER RUNNING... PORT: ' + port)
})