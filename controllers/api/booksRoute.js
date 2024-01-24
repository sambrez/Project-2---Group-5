const express = require('express');
const router = express.Router();
const { Books } = require('../../models');

// GET all books
router.get('/', async (req, res) => {
  try {
    const books = await Books.findAll();
    res.json(books);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// GET a book by ID
router.get('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const book = await Books.findByPk(id);

    if (!book) {
      res.status(404).json({ error: 'Book not found' });
      return;
    }

    res.json(book);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// get the form for adding new book
router.get("/add_book", (req, res) => {
  res.render("newBook");
});

// POST a new book
router.post('/add_book', async (req, res) => {
  const { title, author, genre, recommendation, review, user_id } = req.body;

  try {
    const newBook = await Books.create({ title, author, genre, recommendation, review, user_id });
    res.status(201).json(newBook);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;