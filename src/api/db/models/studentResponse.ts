import {Document, Mongoose, model} from 'mongoose';
import {IStudentResponse} from '../interfaces/studentResponse';
import {studentResponseSchema} from '../schemas/studentResponse';

export interface IStudentResponseModel extends IStudentResponse, Document {

}

export const StudentResponse = model<IStudentResponseModel> ('StudentResponse', studentResponseSchema);