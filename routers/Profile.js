const express = require('express');
const router = express.Router();

const ProfileController = require('../Controllers/ProfileControlles');

router.post('/addProfile',ProfileController.AddProfiel);
router.post('/GetProfile',ProfileController.getbyUser);
router.post('/GetProfileBook',ProfileController.getbyUserBook);
router.post('/deleteprofile',ProfileController.deleteprofile);
router.get('/GetProfileAll',ProfileController.GetAllProfile);



module.exports = router;