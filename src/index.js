require('dotenv').config();
const express = require('express');
const cors = require('cors');

const router = require('./routes/router');
const routeruser = require('./routes/user.router');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors({ origin: true, credentials: true }));

app.use('/', router);
app.use('/', routeruser);

app.listen(process.env.SERVER_PORT, () => { console.log('Server Running PORT ' + process.env.SERVER_PORT) });
