const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send("Hola world! Docker");
});

module.exports = app;