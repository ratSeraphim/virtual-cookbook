import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./style";

const Create = () => {
  const navigate = useNavigate();
  const [ingredient, setIngredient] = useState("");
  const [status, setStatus] = useState("");
  const [recipe, setRecipe] = useState({
    name: "",
    time: "",
    ingredients: [],
    steps: "",
    id: crypto.randomUUID(),
  });

  const addIngredient = (e) => {
    if (ingredient) {
      const previousIngredient = recipe.ingredients;

      setRecipe({
        ...recipe,
        ingredients: previousIngredient.concat(ingredient),
      });
    }

    setIngredient("");
  };

  const formInputChange = (e) => {
    const { name, value } = e.target;

    setRecipe({
      ...recipe,
      [name]: value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (
      recipe.name &&
      recipe.ingredients.length > 0 &&
      recipe.steps &&
      recipe.time
    ) {
      setStatus("Submitting...");
      fetch("http://localhost:3001/recipes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(recipe),
      }).then(() => {
        setTimeout(() => {
          navigate("/");
          navigate(0);
        }, 1500);
      });
    } else {
      setStatus("Please fill out all of the fields!");
    }
  };

  return (
    <S.CreatePage>
      <S.PageTitle>Add a new recipe</S.PageTitle>
      <S.MyForm onSubmit={handleFormSubmit}>
        <S.Label>Recipe title:</S.Label>
        <S.TextInput
          type="text"
          name="name"
          value={recipe.name}
          onChange={formInputChange}
        ></S.TextInput>
        <S.Label>Recipe ingredients:</S.Label>
        <S.IngredientList>
          <S.IngredientInput
            type="text"
            name="ingredient"
            value={ingredient}
            onChange={(e) => setIngredient(e.target.value)}
          ></S.IngredientInput>
          <S.AddButton
            type="button"
            value="add"
            onClick={addIngredient}
          ></S.AddButton>
        </S.IngredientList>
        <p>Current ingredients: </p>
        {recipe.ingredients &&
          recipe.ingredients.map((ingredient, key) => (
            <li key={key}>{ingredient}</li>
          ))}

        <S.Label>Recipe method:</S.Label>
        <S.TextInput
          type="textarea"
          name="steps"
          value={recipe.steps}
          onChange={formInputChange}
        ></S.TextInput>
        <S.Label>Cooking time (in minutes):</S.Label>
        <S.TextInput
          type="number"
          name="time"
          value={recipe.time}
          onChange={formInputChange}
        ></S.TextInput>
        <S.SubmitButton type="submit" value="submit"></S.SubmitButton>
      </S.MyForm>
      <div>{status}</div>
    </S.CreatePage>
  );
};

export default Create;
