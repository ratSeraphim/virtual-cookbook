const Create = () => {
  return (
    <>
      <h1>Add a new recipe</h1>
      <form>
        <label>Recipe title:</label>
        <input type="text" name="title"></input>
        <label>Recipe ingredients:</label>
        <div>
          <form>
            <input type="text" name="ingredient"></input>
            <input type="submit" value="add"></input>
            <p>Current ingredients:</p>
          </form>
        </div>
        <label>Recipe method:</label>
        <input type="textarea" name="steps"></input>
        <label>Cooking time (in minutes):</label>
        <input type="number" name="time"></input>
        <input type="submit"></input>
      </form>
    </>
  );
};

export default Create;
