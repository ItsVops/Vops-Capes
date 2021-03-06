// Global Variables
const express = require('express');
const app = express();
const config = require('../config.json');
const fs = require('fs');

app.use(function(req, res, next) {
  res.setHeader('api', ([]+[]+([]).constructor)[(+[+!+[]+[+[]+[+[]]]])/((+!+[])+(+!+[]))/((+!+[])+(+!+[]))-(+!+[])]+(typeof ![])[(+!+[])]+(RegExp().constructor.name)[((+!+[])+(+!+[]))+(+!+[]+((+!+[])+(+!+[])))]+(![]+[])[(+!+[]+((+!+[])+(+!+[])))]+`-`+(typeof [])[((+!+[])+(+!+[]))*((+!+[])+(+!+[]))]+(![]+[])[(+!+[])]+(RegExp().constructor.name)[((+!+[])+(+!+[]))+(+!+[]+((+!+[])+(+!+[])))]+([]+[]+[][[]])[(+!+[]+((+!+[])+(+!+[])))]+(![]+[])[(+!+[]+((+!+[])+(+!+[])))])
  res.setHeader('charset', 'utf-8')
  next();
});

app.use('/capes', require('./routes/capes.js'));

app.use('/users', require('./routes/users.js'));

app.use('/assets', express.static('./api/assets'))

if (config.panel.active && config.storage.type === "mysql" && config.discord.active) {
  app.use('/panel', express.static('./api/panel', {extensions:['html']}))
  app.use('/api/auth', require('./routes/panel/auth.js'))
  app.use('/api/get', require('./routes/panel/get.js'))
  app.use('/api/edit', require('./routes/panel/set.js'))
  console.log("Panel is online.")
}

app.use((req, res, next)=>{
    res.status(404).send(`<style>*{margin:0;user-drag: none;-webkit-user-drag: none;user-select: none;-moz-user-select: none;-webkit-user-select: none;-ms-user-select: none;}</style><img width="100%" height="100%" src="https://i.imgur.com/Xo8nMjQ.jpg">`)
});

// Start Server
app.listen(config.port, () => {
  console.log(`API is online.`);
});
