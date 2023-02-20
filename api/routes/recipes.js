const express = require("express");
const router = express.Router();
const Recipe = require("../models/recipe");

//Getting all
router.get("/", async (req, res) => {
  try {
    const recipes = await Recipe.find();
    res.json(recipes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
/*export function getAllRecipes() {
  router.get("/", async (req, res) => {
    try {
      const recipes = await Recipe.find();
      res.json(recipes);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
}*/

//Getting one
router.get("/:id", getRecipe, (req, res) => {
  res.send(res.recipe);
});

//Creating one
router.post("/", async (req, res) => {
  const recipe = new Recipe({
    name: req.body.name,
    time: req.body.time,
    steps: req.body.steps,
    ingredients: req.body.ingredients,
  });

  try {
    const newRecipe = await recipe.save();
    res.status(201).json(newRecipe);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

//Updating one
router.patch("/:id", getRecipe, async (req, res) => {
  if (req.body.name != null) {
    res.recipe.name = req.body.name;
  }
  if (req.body.recipeSteps != null) {
    res.recipe.recipeSteps = req.body.recipeSteps;
  }

  try {
    const updatedRecipe = await res.recipe.save();
    res.json(updatedRecipe);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

//Deleting one
router.delete("/:id", getRecipe, async (req, res) => {
  try {
    await res.recipe.remove();
    res.json({ message: "Deleted recipe" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

async function getRecipe(req, res, next) {
  let recipe;
  try {
    recipe = await Recipe.findById(req.params.id);
    if (recipe == null) {
      return res.status(404).json({ message: "Cannot find recipe" });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
  res.recipe = recipe;
  next();
}

module.exports = router;
