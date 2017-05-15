import Users from '../models/users.model'
import { hash, cloneObject } from '../helpers'

/**
 * Get all items.
 */
function getAll(req, res) {
    let { query, select, cursor } = req.querymen;

    Users
        .paginate(query, select, cursor)
        .then(data => {
            return res.status(200).success(data.items, { stats: data.stats });
        })
        .catch(error => res.error([error]));
}

/**
 * Get single item.
 */
function getOne(req, res) {
    const id = req.params.userId;

    Users.findOne({ _id: id }, { password: 0 })
        .then(item => {
            return res.status(200).success(item);
        })
        .catch(error => {
            return res.status(500).error([error]);
        });
}

/**
 * Create new item.
 */
function create(req, res, next) {
    let body = req.body;
    let password = body.password;

    hash.make(password)
        .then(hash => {
            body.password = hash;

            return Users.create(body)
        })
        .then(item => {
            let user = cloneObject(item);
            delete user.password;
            return res.status(201).success(user, { message: 'Object created successfully!' });
        })
        .catch(error => res.error([error]));
}

/**
 * Update item.
 */
function update(req, res) {
    const body = req.body;
    const id = req.params.userId;

    let query = { _id: id };
    let options = { new: true };

    Users.findOneAndUpdate(query, body, options)
        .then(item => {
            return res.status(200).success(item);
        })
        .catch(error => {
            return res.status(500).error([error]);
        });
}

/**
 * Delete item.
 */
function remove(req, res) {
    const id = req.params.userId;

    Users
        .findOneAndRemove({ _id: id })
        .then(() => { return res.status(200).success(null, { message: 'Object deleted successfully!' }); })
        .catch(error => res.status(500).error([error]));
}

export default { getOne, getAll, create, update, remove }