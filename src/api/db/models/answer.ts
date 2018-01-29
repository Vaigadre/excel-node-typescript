import {Document, Mongoose, model} from 'mongoose';
import {IAnswer} from '../interfaces/answer';
import {answerSchema} from '../schemas/answer';

export interface IAnswerModel extends IAnswer, Document {

}

export const Answer = model<IAnswerModel>("Answer", answerSchema);
