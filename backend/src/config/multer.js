const multer = require('multer');
const path = require('path');

module.exports = {
    det: path.resolve(__dirname, '..', '..', 'tmp'),   // padroniza a escrita dos caminho dentro do node 
    storage: multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, path.resolve(__dirname, '..', '..', 'tmp'));
        },
        filename: (req, file, cb) => {
            crypto.randomBytes(16, (err, hash) => {
                if (err) cb(err);

                file.key = `${hash.toString('hex')}-${file.originalname}`;
                cb(null, file.key);
            })
        }
    })
};