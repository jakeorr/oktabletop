var express = require('express');
var path = require('path');

var app = express();

app.set('port', (process.env.PORT || 3000));

app.use(express.static(__dirname + '/public'));
app.use('/vendor', express.static(path.join(__dirname, 'bower_components')));

// views is directory for all template files
app.set('views', __dirname);
// app.set('view engine', 'ejs');
app.engine('.html', require('ejs').renderFile);

app.get('/', function(req, res) {
  res.render('index.html');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
