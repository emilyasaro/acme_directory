const express = require('express');
const app = express();
const path = require('path');
const faker = require('faker');

app.get('/', (req, res, next) => {res.sendFile(path.join(__dirname, 'index.html'))});

const PORT = 3000;

app.listen(PORT, console.log(`app listening on port ${PORT}`));
