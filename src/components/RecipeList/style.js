import { Link } from "react-router-dom";
import styled from "styled-components";

export const RecipeList = styled.div`
  margin: 50px 150px;
  display: grid;
  gap: 30px;
  grid-template-columns: [first] 1fr [second] 1fr [third] 1fr;
`;

export const Recipe = styled.div`
  padding: 15px 20px;
  background-color: #fff;
  box-shadow: 2px 2px 2px #bbb;
  border-radius: 2px;
  &:hover {
    transform: rotate(2deg);
  }
`;

export const Title = styled.h1`
  text-align: left;
  font-weight: bold;
  font-size: 24px;
`;

export const Time = styled.h2`
  color: #aaa;
`;

export const Steps = styled.div`
  margin: 10px;
`;

export const Button = styled(Link)`
  background-color: #dfdfdf;
  padding: 5px 15px;
  border-radius: 2px;

  &:hover {
    background-color: #555;
    color: #fff;
    cursor: pointer;
  }
`;
