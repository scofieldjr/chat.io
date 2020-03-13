var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io') (http);

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
  });

  io.on('connection', function(socket){
    console.log('Internauta conectado');
    socket.on('disconnect', function(){
      console.log('Internauta desconectado');
    });
  });

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
});

function pegarDataAtual(){
  var dataAtual = new Date();
  var dia = (dataAtual.getDate()<10 ? '0' : '') + dataAtual.getDate();
  var mes = ((dataAtual.getMonth() + 1)<10 ? '0' : '') + (dataAtual.getMonth() + 1);
  var ano = dataAtual.getFullYear();
  var hora = (dataAtual.getHours()<10 ? '0' : '') + dataAtual.getHours();
  var minuto = (dataAtual.getMinutes()<10 ? '0' : '') + dataAtual.getMinutes();
  var segundo = (dataAtual.getSeconds()<10 ? '0' : '') + dataAtual.getSeconds();
  
  var dataFormatada = dia + "/" + mes + "/" + ano + " " + hora + ":" + minuto + ":" + segundo;
  return dataFormatada;
}

http.listen(3000, function(){
  console.log('Rodando na porta *:3000');
});
