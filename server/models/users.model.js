import mongoose, { Schema } from 'mongoose'

let usersSchema = new Schema({
    email: String,
    created_at: { type: Date, default: Date.now() },
    updated_at: { type: Date, default: Date.now() },
    fist_name: String,
    last_name: String,
    avatar: String,
    password: String
});

export default mongoose.model('Users', usersSchema);