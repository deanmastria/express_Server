const express = require('express');                                         //creating the server  
const morgan = require('morgan');                                           //for logging
const bodyParser = require('body-parser');                                  //parsing incoming requests

const app = express();                                                      //creates an instance of the Express application

app.use(morgan('combined'));                                                //predefined logging middleware provides detailed logs of incoming requests
app.use(bodyParser.urlencoded({ extended: false }));                        // parses inc requests as URL-encoded data, making the data available in req.body
app.use(bodyParser.json())                                                  // parses inc requests as JSON-encoded data, making the data available in req.body

app.get('/', (req, res) => {                                                //simple get route to test the server setup, when the request os made to the URL ('/'), responds with Testing
    res.send('Testing');
});

app.get('/about', (req, res) => {                                           //defines an about route, when the request is made to the URL ('/about'), responds with About
    res.send('About');
});

app.use((req, res, next) => {                                               //defines a 404 route, when the request is made to a URL that does not
    res.status(404).send('Page not found');
});

const PORT = process.env.PORT || 3000;                                     //block starts the server on the specified port, port to listen on                  
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});