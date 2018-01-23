import {Router, Request, Response, NextFunction} from 'express';

export class AnswerRoute {
    router: Router;

    constructor(){
        this.router = Router();
        this.init();
    }

    init(){
        this.router.get('/', (req: Request, res: Response) => {
            res.send("Answers returned..");
        })
    }

}

let answerRoute = new AnswerRoute();
answerRoute.init();

export default answerRoute.router;
