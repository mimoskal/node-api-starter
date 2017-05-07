import mongoose, { Schema } from 'mongoose'
import keywords from 'mongoose-keywords'
import paginate from '../helpers/paginate.plugin'

mongoose.Promise = global.Promise;

let quotesSchema = new Schema({
    author: String,
    quote: String,
    tags: { type: Array, default: [] },
    length: Number,
    featured: { type: Boolean, default: false },
    created_at: { type: Date, default: Date.now() },
    updated_at: { type: Date, default: Date.now() }
}, {
    versionKey: false
});


quotesSchema.plugin(keywords, { paths: ['author', 'tags'] });
quotesSchema.plugin(paginate);


export default mongoose.model('Quotes', quotesSchema);