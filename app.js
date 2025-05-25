require('dotenv').config();
const express = require('express');

const app = express();
const port = process.env.PORT

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
app.use(express.static('public'));

const connect = require('./config/db');
const routes = require('./routes/routes');

connect();

app.use('/', routes);

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
})