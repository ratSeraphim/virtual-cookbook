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
  recipeSteps: {
    type: String,
    required: true,
  },
  recipeIngredient: {
    type: Array,
    required: true,
  },
});

module.exports = mongoose.model("Recipe", recipeSchema);
