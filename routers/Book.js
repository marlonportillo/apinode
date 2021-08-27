const express = require('express');
const router = express.Router();

const BookController = require('../Controllers/BooksController');


router.get('/getBooks', BookController.GetBooks);
router.get('/getBooksById/:id', BookController.GetById);
router.post('/addBooks', BookController.AddBook);
router.delete('/delBook/:id',BookController.DeleteBook);
router.put('/upd-Book/:id',BookController.UpdateBook);

module.exports = router;