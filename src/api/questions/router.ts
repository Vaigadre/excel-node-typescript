import {Router, Request, Response, NextFunction} from 'express';

export class QuestionsRoute {
    router: Router;

    constructor() {
        this.router = Router();
        this.init();
    }

    init() {
        this.router.get('/', (req:Request, res:Response) => {
            res.json({"name": "Add 10 and 20"});
        })
    }

}

let questionsRoute = new QuestionsRoute();
questionsRoute.init();

export default questionsRoute.router;