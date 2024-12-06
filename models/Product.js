const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  category: {
    type: String,
    required: true,
    enum: ["food", "medicine", "accessories", "toys", "grooming"],
  },
  image: { type: String, required: true },
  stock: { type: Number, required: true },
  rating: { type: Number, required: true },
  reviews: { type: Number, required: true },
  featured: { type: Boolean, default: false },
  sizes: [{ type: String }],
  colors: [{ type: String }],
});

module.exports = mongoose.model("Product", productSchema);
