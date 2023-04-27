import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
    courseName : {}
})

const userSchema = new mongoose.Schema({
    name: {type: String, required: true, unique: true},
    age: {type: Number, required: true},
    married: {type: Boolean},
    comment: {type: String},
    createAt: {type: Date},
})