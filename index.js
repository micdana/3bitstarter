var express = require('express');
var app = express.createServer(express.logger());
var fs = require('fs');
var read_myfile = fs.readFileSync('index.html','utf-8');

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));

app.get('/', function(request, response) {
    response.send(read_myfile);
    });

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'));
});
