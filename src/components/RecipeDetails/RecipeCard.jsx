import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import * as S from "./style";

const RecipeCard = () => {
  const { id } = useParams();
  const {
    data: recipe,
    error,
    isPending,
  } = useFetch("http://localhost:3001/recipes/" + id);
  //need to fix ingredient display
  return (
    <div>
      <S.RecipeCard>
        {error && <div>{error}</div>}
        {isPending && <div>Loading...</div>}

        {recipe && (
          <>
            <S.Title>{recipe.title}</S.Title>
            <S.Requirements>
              Takes {recipe.time} minutes to cook
              <S.Ingredients>{recipe.ingredients}</S.Ingredients>
            </S.Requirements>
            <S.Steps>{recipe.steps}</S.Steps>
          </>
        )}
      </S.RecipeCard>
    </div>
  );
};

export default RecipeCard;

/* {recipe.ingredients.map((ing) => (
                  <li key={ing}>{ing}</li>
                ))} */
