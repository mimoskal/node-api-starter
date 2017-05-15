import http from 'http'
import express from 'express'
import bodyParser from 'body-parser'
import routes from './routes'
import mongoose from 'mongoose'
import { responseSchemaMiddleware, logMiddleware } from './helpers'
import expressValidation from 'express-validation';
import CONF from './config'

global.appRoot = __dirname;

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

/**
 * Init express.
 */
let app = express();

app.use(logMiddleware);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(responseSchemaMiddleware);

/**
 * Prefix for all routes.
 */
app.use('/api', routes);

app.use((err, req, res) => {
    if (err instanceof expressValidation.ValidationError) {
        let errors = err.errors.map(error => {
            return {
                field: error.field,
                message: error.messages.join('. ')
            };
        });

        return res.status(err.status || 500).error(errors);
    }

    res.status(err.status || 500).json(err);
});

/**
 * Set the port.
 */
let port = process.env.PORT || CONF.api.port;

app.listen(port);
console.log('RESTAPI listening on port: ' + port);