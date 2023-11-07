import mongoose from "mongoose";

const announcementsSchema = mongoose.Schema({
    title: String,
    message: String,
    announcer: String,
    subject: String,
    createdAt: {
        type: Date,
        default: new Date()
    }
})

const announcements = mongoose.model('announcements',announcementsSchema)

export default announcements;