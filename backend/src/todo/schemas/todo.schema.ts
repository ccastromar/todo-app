import * as mongoose from 'mongoose';

export const TodoSchema = new mongoose.Schema({
   
    title: String,
    category: {type: String, default: 'default'},
    completed: {type: Boolean, default: false}    
    
}, { timestamps: true});