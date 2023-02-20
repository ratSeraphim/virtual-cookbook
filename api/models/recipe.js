const mongoose = require("mongoose");

const recipeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  time: {
    type: Number,
    required: true,
  },
  steps: {
    type: String,
    required: true,
  },
  ingredients: {
    type: Array,
    required: true,
  },
});

module.exports = mongoose.model("Recipe", recipeSchema);
