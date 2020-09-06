const express = require('express');
const router = express.Router();
const UserController = require('../controller/user.controller');
const UserValidation = require('../Middleware/user.middleware');


router.post('/', UserValidation, UserController.create);
router.put('/:id', UserController.update);
router.get('/filter/all', UserController.all);
router.get('/filter/:id', UserController.show);

module.exports = router;