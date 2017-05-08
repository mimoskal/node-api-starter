import { Router } from 'express'
import validate from 'express-validation'
import multer from 'multer'

let router = Router();

let storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads/')
    },
    filename: function (req, file, cb) {
        let name = file.originalname;
        let ext = name.match(/\.[^/.]+$/)[0];

        cb(null, name + '--' + Date.now() + ext);
    }
});

let upload = multer({ storage: storage }).single('file');

router.route('/')
    .post((req, res) => {
        upload(req, res, function(err) {
            let file = req.file;
            // req.body will hold the text fields, if there were any
            if (err) {
                res.status(500).error([err]);
            }

            if (!file) {
                res.status(400).error([{ field: "file", message: "\"file\" is required" }]);
            }

            console.log(err);
            console.log(req.body);
            console.log(req.file);
        })
    });

export default router;