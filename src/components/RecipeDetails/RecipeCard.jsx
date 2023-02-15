import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import * as S from "./style";

const RecipeCard = () => {
  const { id } = useParams();
  const { recipes, error, isPending } = useFetch(
    "http://localhost:3001/recipes/" + id
  );
  return (
    <div>
      <S.RecipeCard>
        {error && <div>{error}</div>}
        {isPending && <div>Loading...</div>}

        {!isPending && recipes && (
          <>
            <S.Title>{recipes.title}</S.Title>
            <S.Requirements>
              Takes {recipes.time} minutes to cook
              <div>
                {recipes &&
                  recipes.ingredients.map((ing, i) =>
                    i === recipes.ingredients.length - 1 ? (
                      <S.Ingredients key={i}> {ing}. </S.Ingredients>
                    ) : (
                      <S.Ingredients key={i}> {ing}, </S.Ingredients>
                    )
                  )}
              </div>
            </S.Requirements>
            <S.Steps>{recipes.steps}</S.Steps>
          </>
        )}
      </S.RecipeCard>
    </div>
  );
};

export default RecipeCard;
