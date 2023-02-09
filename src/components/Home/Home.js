import { useData } from "../hooks/useData";
import RecipeList from "../RecipeList/RecipeList";

const Home = () => {
  const { fetch } = useData();
  const { data, isPending, error } = fetch;
  return (
    <>
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {data && <RecipeList />}
    </>
  );
};

export default Home;
