const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const PORT = process.env.port || 8080;

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function(req, res) {
  console.log('here')
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.get('/ping', function (req, res) {
  console.log('server result pong');
  return res.json('pong');
 });

app.listen(PORT, () => {console.log(`listening on port ${PORT}`)});