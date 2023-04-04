const express = require('express');
const app = express();

const models = require('./models');

models.sequelize.sync().then(function () {
    console.log("A base de dados foi sincronizada!")
    }).catch(function (err) {
    console.log(" > Existe um problema em sincronizar a base de dados!", err);
});


