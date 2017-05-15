import mongoose, { Schema } from 'mongoose'
import paginate from '../helpers/paginate.plugin'
import uniqueValidator from 'mongoose-unique-validator'

let usersSchema = new Schema({
    email: { type: String, required: true, unique: true },
    firstName: String,
    lastName: String,
    avatar: String,
    password: { type: String, required: true }
}, {
    versionKey: false,
    timestamps: true
});

usersSchema.plugin(paginate);
usersSchema.plugin(uniqueValidator);

export default mongoose.model('Users', usersSchema);