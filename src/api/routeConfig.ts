import {Router, Response, Request, NextFunction} from 'express';
import QuestionsRouter from './questions/router';
import QuestionRouter from './question/router';
import AnswerRouter from './answer/router';
import StudentResponseRouter from './studentResponse/router';


export class RouteConfig {
    router: Router;

    //Initialize routeConfig\
    constructor() {
        this.router = Router();
        this.init();
    }

    init() {
        this.router.use('/questions', QuestionsRouter);
        this.router.use('/question', QuestionRouter);
        this.router.use('/answer', AnswerRouter);
        this.router.use('/student-response', StudentResponseRouter);
    }

}

let routeConfig = new RouteConfig();
routeConfig.init();


export default routeConfig.router;