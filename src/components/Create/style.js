import styled from "styled-components";

export const CreatePage = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px auto;
  align-items: center;
`;

export const PageTitle = styled.h1`
  margin: 50px;
  font-weight: bold;
  font-size: 30px;
`;

export const MyForm = styled.form`
  display: flex;
  width: 35%;
  flex-direction: column;
`;

export const Label = styled.label`
  margin: 10px;
  text-align: left;
`;

export const TextInput = styled.input`
  background-color: #fff;
  border-radius: 2px;

  padding: 10px;
`;

export const IngredientInput = styled.input`
  background-color: #fff;
  width: 100%;

  border-radius: 2px;
  padding: 10px;
`;

export const AddButton = styled.input`
  background-color: #58249c;
  color: #fff;
  border-radius: 2px;
  padding: 10px;
  margin: 0 0 0 10px;
  &:hover {
    cursor: pointer;
    background-color: #47138b;
  }
`;

export const SubmitButton = styled.input`
  background-color: #58249c;
  color: #fff;
  border-radius: 2px;
  padding: 10px;
  margin: 30px;
  &:hover {
    cursor: pointer;
    background-color: #47138b;
  }
`;
export const IngredientList = styled.div`
  display: flex;
`;
