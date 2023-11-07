import mongoose from "mongoose";

const usersSchema = mongoose.Schema({
    Role: String,
    Name: String,
    Id: String,
})

const users = mongoose.model('users',usersSchema)

export default users;