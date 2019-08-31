const express = require('express');
const multer = require('multer');
const path = require('path');

const server = express();

const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, 'uploads/images/');
	},
	filename: (req, file, cb) => {
		// To use the real file name.
		// cb(null, file.originalname);

		// To use the real file name with a little 'hash'.
		cb(
			null,
			`${file.originalname}-${Date.now()}${path.extname(
				file.originalname
			)}`
		);
	}
});

const upload = multer({ storage });

server.use(express.json());
server.use(express.static('public'));

server.post('/file/upload', upload.single('file-image-profile'), (req, res) => {
	res.json({
		message: 'Sent file'
	});
});

server.listen(3333);
