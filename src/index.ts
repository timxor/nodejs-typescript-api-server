// src/index.ts
import express from 'express';
import { Book } from './book';
import { v4 as uuidv4 } from 'uuid';

const app = express();
const PORT = 3000;

app.use(express.json()); // Middleware to parse JSON bodies

// Load books data from JSON file
const books: Book[] = require('./books.json');

// Create
app.post('/books', (req, res) => {
  const book: Book = { id: uuidv4(), ...req.body };
  books.push(book);
  res.status(201).send(book);
});

// Read all
app.get('/books', (req, res) => {
  res.status(200).send(books);
});

// Read one
app.get('/books/:id', (req, res) => {
  const book = books.find(b => b.id === req.params.id);
  if (book) {
    res.status(200).send(book);
  } else {
    res.status(404).send({ message: 'Book not found' });
  }
});

// Update
app.put('/books/:id', (req, res) => {
  const index = books.findIndex(b => b.id === req.params.id);
  if (index > -1) {
    const updatedBook = { ...books[index], ...req.body };
    books[index] = updatedBook;
    res.status(200).send(updatedBook);
  } else {
    res.status(404).send({ message: 'Book not found' });
  }
});

// Delete
app.delete('/books/:id', (req, res) => {
  const index = books.findIndex(b => b.id === req.params.id);
  if (index > -1) {
    books.splice(index, 1);
    res.status(204).send();
  } else {
    res.status(404).send({ message: 'Book not found' });
  }
});

app.get('/', (req, res) => {
  res.send('Hello, TypeScript with Node.js!');
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
