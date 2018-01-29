import {Schema} from 'mongoose';

export const questionSchema: Schema = new Schema ({
    name: String,
    state: Object,
    gradedCells: []
});
