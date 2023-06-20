const express = require('express');
app = express();

var response;

app.get('/', function (req, res) { 
  //enviar la respuesta al cliente 
  res.send(response); 
});
  response = 'This is version 3 of the app.' + '\n';


app.listen(8080, function () {
  console.log('Server listening on port 8080...');
});
