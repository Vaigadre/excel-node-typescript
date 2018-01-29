import {Router, Request, Response, NextFunction} from 'express';
import {Question} from '../db/models/question';

export class QuestionsController {
 
    public static getQuestions (req: Request, res: Response) {
        Question.find({}).then((ques) => {
            res.json(ques);
        })
    }
}