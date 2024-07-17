const express = require('express');
const { register, login, getUserById, userLogOut } = require('../controllers/authController');

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/logout', userLogOut)

router.get('/:id', getUserById);

module.exports = router;