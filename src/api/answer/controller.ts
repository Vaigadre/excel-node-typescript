import {Request, Response, NextFunction} from 'express';
import {Answer} from '../db/models/answer';

export class AnswerController {

    public static getAnswer (req:Request, res:Response) {
        Answer.find({questionId:req.params.id}, {'__v':0}).then ((ans) => {
            res.json(ans);
        })
    }

    public static setAnswer (req:Request, res:Response) {
        Answer.create(req.body).then((ans) => {
            res.status(201)
            console.log("Answer is added");
        })
    }

}