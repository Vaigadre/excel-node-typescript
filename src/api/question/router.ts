import {Router, Request, Response, NextFunction} from 'express';

export class QuestionRoute {
    router: Router;

    constructor(){
        this.router = Router();
        this.init();
    }

    init(){
        this.router.get('/', (req: Request, res: Response) => {
            res.send("Question returned..");
        })
    }

}

let questionRoute = new QuestionRoute();
questionRoute.init();

export default questionRoute.router;