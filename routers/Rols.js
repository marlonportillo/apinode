const express = require('express');
const router = express.Router();

const RolController = require('../Controllers/RolsController');


router.get('/getRols',RolController.GetRols);
router.get('/getRolsById/:id',RolController.GetById);
router.post('/addRols',RolController.AddRol);
router.delete('/delRol/:id',RolController.DeleteRol);
router.put('/upd-Rol/:id',RolController.UpdateRol);

module.exports = router;