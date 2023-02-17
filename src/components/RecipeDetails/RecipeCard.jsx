import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import * as S from "./style";

const RecipeCard = () => {
  const { id } = useParams();

  const { data } = useSelector((state) => state.recipes);

  const { recipes, isPending, error } = data;

  let selectedRecipe;
  if (recipes) {
    selectedRecipe = recipes.find((recipe) => {
      return recipe._id === id;
    });
  }

  return (
    <div>
      <S.RecipeCard>
        {error && <div>{error}</div>}
        {isPending && <div>Loading...</div>}

        {!isPending && selectedRecipe && (
          <>
            <S.Title>{selectedRecipe.name}</S.Title>
            <S.Requirements>
              Takes {selectedRecipe.time} minutes to cook
              <div>
                {selectedRecipe &&
                  selectedRecipe.ingredients.map((ing, i) =>
                    i === selectedRecipe.ingredients.length - 1 ? (
                      <S.Ingredients key={i}> {ing}. </S.Ingredients>
                    ) : (
                      <S.Ingredients key={i}> {ing}, </S.Ingredients>
                    )
                  )}
              </div>
            </S.Requirements>
            <S.Steps>{selectedRecipe.steps}</S.Steps>
          </>
        )}
      </S.RecipeCard>
    </div>
  );
};

export default RecipeCard;
