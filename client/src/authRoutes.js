// MERN-CRUD-main/MERN-CRUD-main/client/src/authRoutes.js
const express = require('express');
const router = express.Router();
const { registerUser, loginUser } = require('../controllers/authController');

// Define authentication routes
router.post('/register', registerUser);
router.post('/login', loginUser);

module.exports = router;
