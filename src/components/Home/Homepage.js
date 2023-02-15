import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateData } from "../../redux/Recipes";
import useFetch from "../hooks/useFetch";
import Home from "./Home";

const Homepage = () => {
  const { recipes, isPending, error } = useFetch(
    "http://localhost:3001/recipes"
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(updateData({ recipes, isPending, error }));
  }, [recipes, isPending, error]);

  return <Home />;
};

export default Homepage;
