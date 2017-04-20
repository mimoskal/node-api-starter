import http from 'http'
import express from 'express'
import bodyParser from 'body-parser'
import routes from './routes'
import mongoose from 'mongoose'
import { R, sampleMiddleware } from './helpers'
import expressValidator from 'express-validator'
import expressValidation from 'express-validation';
import CONF from './config'

/**
 * Connect to database.
 */
mongoose.connect(`mongodb://${ CONF.db.host }/${ CONF.db.name }`);

/**
 * Configure server and initial response.
 */
let server = http.createServer((request, response) => {
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.end("Hello From Your HTTP Server\n");
});

server.listen(CONF.server.port, CONF.server.host);

console.log(`HTTP Server running at ${ CONF.server.host }:${ CONF.server.port }/`);
//console.log(routes);

/**
 * Init express.
 */
let app = express();


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(sampleMiddleware({options: 'test'}));

/**
 * Prefix for all routes.
 */
app.use('/api', routes);

app.use((err, req, res, next) => {
    if (err instanceof expressValidation.ValidationError) {
        let error = R.validationError(err);
        return res.status(err.status).json(error);
    }

    console.log(res);
    res.status(err.status).json(err);
});

/**
 * Set the port.
 */
let port = process.env.PORT || CONF.api.port;

app.listen(port);
console.log('RESTAPI listening on port: ' + port);