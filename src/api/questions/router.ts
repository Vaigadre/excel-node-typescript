import {Router, Request, Response, NextFunction} from 'express';
import {QuestionsController} from './controller';
import QuestionController from '../question/controller';

export class QuestionsRoute {
    router: Router;

    constructor() {
        this.router = Router();
        this.init();
    }

    init() {
        this.router.get('/', QuestionsController.getQuestions);
    }

}

let questionsRoute = new QuestionsRoute();
questionsRoute.init();

export default questionsRoute.router;