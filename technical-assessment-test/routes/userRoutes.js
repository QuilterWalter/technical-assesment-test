const express = require('express');
const router = express.Router();
const { registerUser, getUsers } = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/register', registerUser);
router.get('/', authMiddleware, getUsers);

module.exports = router;
