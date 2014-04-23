var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));

app.get('/ping', function(req, res){
    res.send('pong');
});

var port = Number(process.env.PORT || 3000);
var server = app.listen(port, function() {
    console.log('Listening on port %d', server.address().port);
});
