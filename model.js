const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const BookSchema = new Schema(
  {
    judul: { type: String, required: true },
    pengarang: { type: String, required: true },
  },
  { collection: "bookCollection" }
);

module.exports = mongoose.model("BukuModel", BookSchema);
