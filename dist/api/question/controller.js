"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const question_1 = require("../db/models/question");
class QuestionController {
    /**
     * Get all
     * @param {*} req
     * @param {*} res
     * @param {*} next
     */
    static getQuestion(req, res) {
        question_1.Question.find({ _id: req.params.id }, { "__v": 0 }).then((que) => {
            res.json(que);
        });
    }
    ;
    static setQuestion(req, res) {
        // console.log(req.body);
        question_1.Question.create(req.body).then((que) => {
            //console.log(res.body);
            res.status(201);
            console.log("Question is added. ");
        }).catch((err) => {
            res.json(err);
        });
    }
    ;
}
exports.default = QuestionController;
/*
    public static async getAll(req: Request, res: Response, next: NextFunction) {

        try {

            //
            // Get data
            let result = await Question.find().exec();

            //
            // Response
            res.send({
                message: 'it works! We got all examples',
                result: result
            });
        } catch (err) {

            //
            // Error response
            res.send({
                message: 'Could not get Examples',
                err: err
            });
        }
    }

    /**
     * Create
     * @param {*} req
     * @param {*} res
     * @param {*} next
     */ /*
public static async create(req: Request, res: Response, next: NextFunction) {

   //
   // Create model
   let que = new Question({
       name: req.body.name,
       state: req.body.state,
       gradedCells:req.body.gradedCells
   });
   console.log(que);

   //
   // Save
   await Question.create(que);

   res.send({
       message: 'Created!',
       question: que
   });
}
*/ 
