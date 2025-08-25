const express = require('express');
const connectDb = require('./config/dbConnection');
require('dotenv').config();

const app = express();

connectDb();

app.use(express.json());

app.use('/api/reports', require('./routes/reportRoutes'));
app.use('/api/services', require('./routes/serviceRoutes'));
app.use('/api/admin', require('./routes/adminRoutes'));

module.exports = app;
