import {Schema} from 'mongoose';

export const answerSchema:Schema = new Schema ({
    questionId: String,
    gradedCells: []
})