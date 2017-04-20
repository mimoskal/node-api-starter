import mongoose, { Schema } from 'mongoose'

let favsSchema = new Schema({
    user: String,
    favs: Array,
    created_at: { type: Date, default: Date.now() },
    updated_at: { type: Date, default: Date.now() },
    email: String
});

export default mongoose.model('Favs', favsSchema);