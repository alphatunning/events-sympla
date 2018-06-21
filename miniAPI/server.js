var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());

var events = [];

app.all('*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.get('/events', function(req, res) {
  res.json(events);
});

app.post('/events', function(req, res) {
  events.push(req.body);
  res.json(true);
});

app.delete('/events/:id', function(req, res) {
  console.log("ID que chegou: "+req.params.id);
  events.forEach(function (evt) {
    if (evt.id == req.params.id) {
      events.splice(evt.id,1);
      res.json(true);
    }
  });
});

app.listen(3200, () => console.log('Servidor express rodando na porta 3200'));
