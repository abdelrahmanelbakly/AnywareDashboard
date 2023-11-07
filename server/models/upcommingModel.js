import mongoose from "mongoose";

const upcommingsSchema = mongoose.Schema({
    Type: String,
    Subject: String,
    Topic: String,
    DueOn: {
        type: Date,
        default: new Date(Date.now() + Math.random() * 1000 * 60 * 60 * 24 * 365)
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
})

const upcomming = mongoose.model('upcomming',upcommingsSchema)

export default upcomming;