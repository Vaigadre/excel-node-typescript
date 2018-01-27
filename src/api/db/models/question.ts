import {Document, Mongoose, model} from 'mongoose';
import {IQuestion} from '../interfaces/question';
import {questionSchema} from '../schemas/question';

export interface IQuestionModel extends IQuestion, Document {

}

export const Question = model<IQuestionModel>("Question", questionSchema);