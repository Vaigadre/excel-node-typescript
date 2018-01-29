import {Request, Response, NextFunction} from 'express';
import {StudentResponse} from '../db/models/studentResponse';

export class StudentResponseController {

    public static getStudentResponse (req:Request, res:Response) {
        StudentResponse.find({questionId: req.params.id}).then( (stuAns) =>{
            res.json(stuAns);
        })
    }

    public static setStudentResponse (req:Request, res:Response) {
        StudentResponse.findOneAndUpdate ({questionId: req.body.questionId}, req.body, {upsert: true} ).then( (stuAns) => {
            res.status(201);
            console.log("Student response added/modified");
        })
    }
}
