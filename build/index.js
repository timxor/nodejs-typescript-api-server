"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/index.ts
const express_1 = __importDefault(require("express"));
const uuid_1 = require("uuid");
const app = (0, express_1.default)();
const PORT = 3000;
app.use(express_1.default.json()); // Middleware to parse JSON bodies
// Load books data from JSON file
const books = require('./books.json');
// Create
app.post('/books', (req, res) => {
    const book = Object.assign({ id: (0, uuid_1.v4)() }, req.body);
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
    }
    else {
        res.status(404).send({ message: 'Book not found' });
    }
});
// Update
app.put('/books/:id', (req, res) => {
    const index = books.findIndex(b => b.id === req.params.id);
    if (index > -1) {
        const updatedBook = Object.assign(Object.assign({}, books[index]), req.body);
        books[index] = updatedBook;
        res.status(200).send(updatedBook);
    }
    else {
        res.status(404).send({ message: 'Book not found' });
    }
});
// Delete
app.delete('/books/:id', (req, res) => {
    const index = books.findIndex(b => b.id === req.params.id);
    if (index > -1) {
        books.splice(index, 1);
        res.status(204).send();
    }
    else {
        res.status(404).send({ message: 'Book not found' });
    }
});
app.get('/', (req, res) => {
    res.send('Hello, TypeScript with Node.js!');
});
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
