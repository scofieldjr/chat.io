var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io') (http);

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
  });

  io.on('connection', function(socket){
    console.log('Participante conectado');
    socket.on('disconnect', function(){
      console.log('Participante desconectado');
    });
  });

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
});

http.listen(3000, function(){
  console.log('Ouvindo na porta *:3000');
});
