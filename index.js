var express = require('express');
var app = express();
var fs = require('fs');
var buf = new Buffer();

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));

app.get('/', function(request, response) {
    var read_all = buf.write(fs.readFileSync('/3bitstarter/index.html', 'utf8'));
    var data_buf = buf.toString('utf8',0, read_all);
response.send(data_buf);
    }
  );

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'));
});
