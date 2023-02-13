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
  return (
    <div>
      <S.RecipeCard>
        {error && <div>{error}</div>}
        {isPending && <div>Loading...</div>}

        {!isPending && recipe && (
          <>
            <S.Title>{recipe.title}</S.Title>
            <S.Requirements>
              Takes {recipe.time} minutes to cook
              <div>
                {recipe &&
                  recipe.ingredients.map((ing, i) =>
                    i === recipe.ingredients.length - 1 ? (
                      <S.Ingredients key={i}> {ing}. </S.Ingredients>
                    ) : (
                      <S.Ingredients key={i}> {ing}, </S.Ingredients>
                    )
                  )}
              </div>
            </S.Requirements>
            <S.Steps>{recipe.steps}</S.Steps>
          </>
        )}
      </S.RecipeCard>
    </div>
  );
};

export default RecipeCard;
