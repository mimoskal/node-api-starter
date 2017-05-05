import Quotes from '../models/quotes.model';

/**
 * Load quote and append to req.
 */
function load(req, res, next, id) {
    Quotes.findById(id)
        .then((quote) => {
            if (!quote) {
                return res.status(404).error(null, { message: "Object not found" });
            }

            req.quote = quote;
            return next();
        })
        .catch(error => res.status(404).error([error]));
}

/**
 * Get single item.
 */
function getOne(req, res) {
    return res.status(200).success(req.quote);
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
    let quote = req.quote;
    let body = req.body;

    quote.length = body.quote.length;
    quote.updated_at = new Date();
    Object.assign(quote, body);

    quote.save()
        .then(item => { return res.status(200).success(item); })
        .catch(error => res.status(500).error([error]));
}

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
 * Delete item.
 */
function remove(req, res, next) {
    const quote = req.quote;

    quote
        .remove()
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

export default { load, getOne, getAll, create, update, remove, removeAll }