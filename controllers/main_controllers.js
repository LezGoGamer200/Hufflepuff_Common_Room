const mongodb = require("../db/connect");
const ObjectId = require("mongodb").ObjectId;
const Book = require("../models/book.js");

const functionOne = (req, res) => {
  res.send("Hello from my route!");
};

const retrieveAllBooks = async (req, res) => {
  const books = await Book.find().sort([
    ["author", 1],
    ["placeInSeries", 1],
  ]);
  console.log(books, Book);
  res.status(200).json({ books, nbHits: books.length });
};
const addOneBook = async (req, res) => {
  const book = await Book.create(req.body);
  res.status(201).json({ book });
};
const removeOneBook = async (req, res) => {
  const { id: bookID } = req.params;
  const book = await Book.findOneAndDelete({ _id: bookID });
  if (!book) {
    console.log(`No book with id: ${bookID}`);
  }
  res.status(200).json({ book: null, status: "success" });
};
module.exports = {
  functionOne,
  retrieveAllBooks,
  addOneBook,
  removeOneBook,
};
