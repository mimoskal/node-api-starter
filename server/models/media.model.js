import mongoose, { Schema } from 'mongoose'
import paginate from '../helpers/paginate.plugin'

let mediaSchema = new Schema({
    url: String,
    title: String
}, {
    versionKey: false,
    timestamps: true
});

mediaSchema.plugin(paginate);

export default mongoose.model('Media', mediaSchema);