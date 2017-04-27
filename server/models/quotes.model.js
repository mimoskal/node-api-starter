import mongoose, { Schema } from 'mongoose'

let quotesSchema = new Schema({
    author: String,
    quote: String,
    tags: { type: Array, default: [] },
    length: Number,
    featured: { type: Boolean, default: false },
    created_at: { type: Date, default: Date.now() },
    updated_at: { type: Date, default: Date.now() }
});

export default mongoose.model('Quotes', quotesSchema);