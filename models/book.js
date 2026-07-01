const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Book name must be provided."],
  },
  author: {
    type: String,
    required: [true, "Author name must be provided."],
  },
  placeInSeries: {
    type: String,
    required: [
      true,
      "Place in the order of the series must be provided. For standalone books, just put 1.",
    ],
  },
});

module.exports = mongoose.model("Book", bookSchema);
