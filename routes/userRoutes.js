
const express = require('express');
const { getUser, createUser } = require('../controllers/userController');
const router = express.Router();

// Define routes
router.get('/:userId', getUser);
router.post('/', createUser);

module.exports = router;
