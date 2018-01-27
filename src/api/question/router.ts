import {Router, Request, Response, NextFunction} from 'express';
import QuestionController from './controller';

export class QuestionRoute {
    router: Router;

    constructor(){
        this.router = Router();
        this.init();
    }

    init(){
        this.router.get('/', QuestionController.getQuestion);
        this.router.post('/', QuestionController.setQuestion);
    }

}

let questionRoute = new QuestionRoute();
questionRoute.init();

export default questionRoute.router;