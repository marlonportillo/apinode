const express = require('express');
const router = express.Router();

const UsersController = require('../Controllers/UsersController');


router.get('/getUsers',UsersController.GetUsers);
router.get('/getUsersbyId/:id',UsersController.GetById);
router.post('/addUsers',UsersController.AddUser);
router.post('/Login',UsersController.LogIn);
router.delete('/delUsers/:id',UsersController.DeleteUser);
router.put('/upd-Users/:id',UsersController.UpdateUser);

module.exports = router;