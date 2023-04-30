const express=require('express');
const { getAllBooks, createBook, updateBook, deleteBook, getBookDetails } = require('../controllers/bookController');
const router=express.Router()

router.route("/books").get(getAllBooks);
router.route("/book/new").post(createBook);
router.route("/book/:id").put(updateBook).delete(deleteBook).get(getBookDetails);

module.exports = router;