require('dotenv').config();
const bodyParser = require('body-parser');
const router = require('./app/router');


const PORT = process.env.PORT || 3000;

const express = require("express");

const app = express();

// body parser
app.use(bodyParser.json()); // => req.body va contenir le JSON de la req


//pour recuperer les données en post
// ce middleware là cree app.body
app.use(
    express.urlencoded({
        extended: true
    })
);

app.use(router);

// on lance le serveur
app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
});


