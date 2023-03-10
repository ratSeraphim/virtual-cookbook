import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { updateData } from "../../redux/Recipes";
import useFetch from "../hooks/useFetch";
import RecipeCard from "../RecipeDetails/RecipeCard";
import Home from "./Home";

const Homepage = () => {
  const { id } = useParams();
  const { recipes, isPending, error } = useFetch(
    "http://localhost:3001/recipes"
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(updateData({ recipes, isPending, error }));
  }, [recipes, isPending, error]);

  return (
    <>
      {!id && <Home />} {id && <RecipeCard />}
    </>
  );
};

export default Homepage;
