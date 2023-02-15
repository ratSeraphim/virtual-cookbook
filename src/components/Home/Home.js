import RecipeList from "../RecipeList/RecipeList";

import { useSelector } from "react-redux";

const Home = () => {
  const { data } = useSelector((state) => state.recipes);

  const { recipes, isPending, error } = data;

  return (
    <>
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}

      {recipes && <RecipeList />}
    </>
  );
};

export default Home;
