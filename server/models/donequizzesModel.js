import mongoose from "mongoose";

const quizzessSchema = mongoose.Schema({
    Subject: String,
    Student: String,
    Teacher: String,
    Grade: Number,
    createdAt: {
        type: Date,
        default: new Date()
    }
})

const quizzes = mongoose.model('quizzes',quizzessSchema)

export default quizzes;