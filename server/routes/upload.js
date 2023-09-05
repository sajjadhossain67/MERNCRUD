// const express = require('express');
// const router = express.Router();
// const multer = require('multer');
// const path = require('path');

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, 'server/uploads/');
//   },
//   filename: function (req, file, cb) {
//     const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
//     cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
//   },
// });

// const upload = multer({ storage: storage });

// router.post('/upload', upload.single('photo'), (req, res) => {
//   // Handle the uploaded file, save its details to the database, etc.
//   // For this example, let's just return a success message.
//   res.json({ message: 'File uploaded successfully!' });
// });

// module.exports = router;
