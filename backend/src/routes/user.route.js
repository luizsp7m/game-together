const express = require('express');
const router = express.Router();
const UserController = require('../controller/user.controller');
const UserValidation = require('../middleware/user.middleware');


router.post('/', UserValidation, UserController.create);
router.post('/login', UserController.authenticate);
router.put('/:id', UserController.update);
router.get('/filter/all', UserController.all);
router.get('/filter/:id', UserController.show);
router.delete('/:id', UserController.delete);

module.exports = router;