import multer from 'multer'
import Media from '../models/media.model'

/**
 * Get all items.
 */
function getAll(req, res) {
    let { query, select, cursor } = req.querymen;

    Media
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
    const id = req.params.mediaId;

    Media.findOne({ _id: id })
        .then(item => {
            return res.status(200).success(item);
        })
        .catch(error => {
            return res.status(500).error([error]);
        });
}

/**
 * Update item.
 */
function update(req, res) {
    updateFile(req, res, function(err) {
        const body = req.body;
        const id = req.params.mediaId;

        let query = { _id: id };
        let options = { new: true };

        Media.findOneAndUpdate(query, body, options)
            .then(item => {
                return res.status(200).success(item);
            })
            .catch(error => {
                return res.status(500).error([error]);
            });
    });
}

/**
 * Delete item.
 */
function remove(req, res) {
    const id = req.params.mediaId;

    Media
        .findOneAndRemove({ _id: id })
        .then(() => { return res.status(200).success(null, { message: 'Object deleted successfully!' }); })
        .catch(error => res.status(500).error([error]));
}

// UPLOAD
let storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, `${ appRoot }/uploads`);
    },
    filename: function (req, file, cb) {
        let name = file.originalname;
        let ext = name.match(/\.[^/.]+$/)[0];
        name = name.replace(/\.[^/.]+$/, '');
        cb(null, name + '--' + Date.now() + ext);
    }
});

let uploadFile = multer({ storage: storage }).single('file');
let updateFile = multer().single();

/**
 * Upload item.
 */
function upload(req, res) {
    uploadFile(req, res, function(err) {
        let file = req.file;
        // req.body will hold the text fields, if there were any
        if (err) {
            return res.status(500).error([err]);
        }

        if (!file) {
            return res.status(400).error([{ field: "file", message: "\"file\" is required" }]);
        }

        create(req, res);
    });
}

/**
 * Create new item.
 */
function create(req, res) {
    let body = req.body;
    let file = req.file;
    body.url = file.path;

    Media
        .create(body)
        .then(item => {
            return res.status(201).success(item, { message: 'Object created successfully!' });
        })
        .catch(error => res.error([error]));
}

export default { upload, getAll, remove, getOne, update }