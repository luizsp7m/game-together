const express = require('express');
const router = express.Router();
const UserController = require('../controller/user.controller');
const UserValidation = require('../middleware/user.middleware');
const UserAuth = require('../middleware/auth.middleware');


router.post('/', UserValidation, UserController.create); /* Criação da conta */

router.post('/signin', UserController.authenticate); /* Login */
router.put('/:id', UserAuth, UserController.update); /* Atualizando dados do perfil */

router.get('/filter/all', UserController.all);
router.get('/filter/:id', UserController.show);
router.delete('/:id', UserController.delete);

module.exports = router;