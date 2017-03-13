'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const path = require("path");
const request = require('request');
const favicon = require('serve-favicon');
const http = require('http');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));

const server = app.listen(process.env.PORT || 5000, () => {
  console.log('Listening on port %d', server.address().port);
});

app.use(favicon(__dirname + '/public/images/favicon.ico'));

// Landing Page
app.get('/', (req, res)=>{
  res.sendFile(path.join(__dirname+'/index.html'));
});

// Wake up Heroku
setInterval(function() {
    http.get("http://sorting-hat-bot.herokuapp.com/sort");
}, 300000);
