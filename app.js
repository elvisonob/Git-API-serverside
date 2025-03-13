const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*'),
    res.setHeader(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-type, Accept, Authorization'
    ),
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');
  next();
});

app.get('/api', (req, res, next) => {
  res.end('One love');
});

const PORT = process.env.PORT || 9091;
app.listen(PORT);
