import Quotes from '../models/quotes.model'

/**
 * Get all items.
 */
function getAll(req, res, next) {
    let { query, select, cursor } = req.querymen;

    Quotes
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
    const id = req.params.quoteId;

    Quotes.findOne({ _id: id })
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
function create(req, res) {
    let body = req.body;
    body.length = body.quote.length;

    Quotes
        .create(req.body)
        .then(item => {
            return res.status(201).success(item, { message: 'Object created successfully!' });
        })
        .catch(error => res.error([error]));
}

/**
 * Update item.
 */
function update(req, res) {
    const body = req.body;
    const id = req.params.quoteId;

    body.length = body.quote.length;

    let query = { _id: id };
    let options = { new: true };

    Quotes.findOneAndUpdate(query, body, options)
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
function remove(req, res, next) {
    const id = req.params.quoteId;

    Quotes
        .findOneAndRemove({ _id: id })
        .then(() => { return res.status(200).success(null, { message: 'Object deleted successfully!' }); })
        .catch(error => res.status(500).error([error]));
}

/**
 * Delete all items.
 */
function removeAll(req, res, next) {
    Quotes
        .remove({}, () => { return res.json({ message: 'All quotes has been deleted!' }); })
        .catch(error => res.error([error]));
}

export default { getOne, getAll, create, update, remove, removeAll }