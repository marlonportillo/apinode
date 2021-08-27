const express = require('express');
const router = express.Router();

const AuthorController = require('../Controllers/AuthorController');


router.get('/getAuthors',AuthorController.GetAuthors);
router.get('/getAuthorsbyId/:id',AuthorController.GetById);
router.post('/addAuthors',AuthorController.AddAuthor);
router.delete('/delAuthor/:id',AuthorController.DeleteAuthor);
router.put('/upd-Author/:id',AuthorController.UpdateAuthor);

module.exports = router;