require('dotenv').config();
const bodyParser = require('body-parser');
const router = require('./app/router');
const sanitizeMiddleware = require('./app/middleware/sanitise');



const PORT = process.env.PORT || 3000;

const express = require("express");

const app = express();

// body parser
app.use(bodyParser.json()); // => req.body va contenir le JSON de la req

// reglage cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Origin', req.headers.origin);
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Access-Control-Allow-Headers, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PATCH, OPTIONS, PUT, DELETE');
    if (req.method === "OPTIONS") {
        return res.status(200).send("OK");
      }
    next();
  });


//pour recuperer les données en post
// ce middleware là cree app.body
app.use(
    express.urlencoded({
        extended: true
    })
);
// pour rendre propre les infos envoyés dans le body par le user
app.use(sanitizeMiddleware);

app.use(router);

// on lance le serveur
app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
});


