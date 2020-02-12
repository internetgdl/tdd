var express = require('express');
var app = express();
const path = require('path');
var bodyParser = require('body-parser');
const Messenger = require('../lib/messenger');
app.set('view engine', 'ejs');
app.use(bodyParser.json()); 

app.use(express.json());

app.use(bodyParser.urlencoded({
  extended: true
}));

app.get('/', function (req, res) {
  //res.send('Hello World!');
  //res.sendFile('./views/index.html');
  let mesenger;
  mesenger = new Messenger( );
  var message = mesenger.getMessage(); 
  res.render(path.join(__dirname+'/views/index'), {message:message}); 
});

app.post('/', function (req, res) {
  //res.send('Hello World!');
  //res.sendFile('./views/index.html');
  let mesenger;
  mesenger = new Messenger( );
  console.log(req.body.hora);
  var datetime = new Date('1970-01-01T' + req.body.hora);
  var message = mesenger.getMessage(datetime,req.body.idioma); 
  res.render(path.join(__dirname+'/views/index'), {message:message}); 
});


app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

