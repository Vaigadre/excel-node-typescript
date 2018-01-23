import * as express from 'express';
import * as path from 'path';
import * as bodyParser from 'body-parser';
import * as logger from 'morgan';

import RouteConfig from './api/routeConfig';

//Creates and configures Express app
class App {

    //ref to express application instance
    public app: express.Application;

    //Runs configration on express instance
    constructor() {
        this.app = express();
        this.middleware();
        this.routes();
    }

    //configure express middleware
    private middleware(): void {
        this.app.use(logger('dev'));
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({extended: false}));
    }

    //configure API endpoints
    private routes(): void {
        //let router = express.Router();
        //default route
        this.app.get('/', (req, res, next)=> {
            res.json({message: "The valid endpoints are /excel/apiName ex: question"});
        })

        this.app.use('/excel', RouteConfig);
    }
}

export default new App().app;