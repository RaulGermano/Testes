const express = require('express');
const multer = require('multer');

const server = express();

const upload = multer({ dest: 'uploads/images/' });

server.use(express.static('public'));

server.post('/file/upload', upload.single('file'), (req, res) => {
	res.send('Ok');
});

server.listen(3000);
