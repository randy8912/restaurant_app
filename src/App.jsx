import { useState } from "react";
import RecipeListPage from "./pages/RecipeListPage";
import RecipePage from "./pages/RecipePage";

export const App = () => {
  const [selectedRecipe, setSelectedRecipe] = useState(null); // State to track the selected recipe

  return (
    <>
      {selectedRecipe ? ( // Conditional rendering based on selectedRecipe
        <RecipePage
          recipe={selectedRecipe} // Passing the selected recipe to RecipePage
          goBack={() => setSelectedRecipe(null)} // Function to go back to the list
        />
      ) : (
        <RecipeListPage onSelectRecipe={setSelectedRecipe} /> // Render the list if no recipe is selected
      )}
    </>
  );
};
