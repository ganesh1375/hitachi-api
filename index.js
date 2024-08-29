const express = require('express');

const app = express();

//Imports starts here
const config = require('./config/config');



app.listen(config.port, () => {
    console.log(`Server Started at Port ${config.port}`);
})