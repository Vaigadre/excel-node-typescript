import {Schema} from 'mongoose';

export const studentResponseSchema:Schema = new Schema({
    questionId: String,
    answer: []
})