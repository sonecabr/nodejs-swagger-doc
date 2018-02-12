const swagger = require('swagger-jsdoc');

module.exports = function(app) {

    // swagger definition
    let swaggerDefinition = {
        info: {
            title: 'My RESTful API',
            version: '1.0.0',
            description: '',
        },
        host: 'localhost:3000',
        schemes: ['http'],
        basePath: '/api/v1',
        securityDefinitions: {
            "Bearer": {
            "type": "apiKey",
            "name": "Authorization",
            "in": "header"
            }
        }
    };

    let hostPort = process.env.API_PORT || 3000;
    let hostName = process.env.API_HOSTNAME || 'localhost';

    if (hostPort === 3000) {
        swaggerDefinition.host = `${hostName}:${hostPort}`;
    } else {
        swaggerDefinition.host = hostName;
    }

    // options for the swagger docs
    let options = {
        // import swaggerDefinitions
        swaggerDefinition: swaggerDefinition,
        // path to the API docs
        apis: [
                './routes/index.js', 
            ],
    };

    // initialize swagger-jsdoc
    let swaggerSpec = swagger(options);

    // serve swagger
    app.get('/swagger.json', (req, res) => {
        res.setHeader('Content-Type', 'application/json');
        res.send(swaggerSpec);
    });

}
