var express = require('express');
var path = require('path');
var mongoose = require('mongoose');

var config = require('./config');

mongoose.connect(config.db);
mongoose.connection.on('error', function() {
  console.info('Error: database connection failed.');
});

var app = express();

app.set('port', process.env.PORT || 3000);
app.use(express.static(path.join(__dirname, 'public')));


var server = require('http').createServer(app);
var io = require('socket.io')(server);
var connected = 0;
io.on('connection', function (socket) {
  connected++;
  socket.on('disconnect', function () {
    connected--;
  });

  });
});

server.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + app.get('port'));
});
