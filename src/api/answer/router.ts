import {Router, Request, Response, NextFunction} from 'express';
import {AnswerController} from './controller';


export class AnswerRoute {
    router: Router;

    constructor(){
        this.router = Router();
        this.init();
    }

    init(){
        this.router.get('/:id', AnswerController.getAnswer);
        this.router.post('/', AnswerController.setAnswer);
    }

}

let answerRoute = new AnswerRoute();
answerRoute.init();

export default answerRoute.router;
