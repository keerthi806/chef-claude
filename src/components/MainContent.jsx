import { useState, useRef, useEffect } from 'react';
import IngredientsList from './IngredientsList';
import ClaudeRecipe from './ClaudeRecipe';
import { getRecipeFromMistral } from '../ai';
import loadingGif from '../assets/loading.gif';
import './MainContent.css';

export default function MainContent() {
  const [ingredients, setIngredients] = useState([
    'chicken',
    'all main spices',
    'corn',
    'heavy cream',
    'pasta'
  ]);

  const [recipe, setRecipe] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  const recipeSectionRef = useRef(null);

  useEffect(() => {
    if(recipe && recipeSectionRef) {
      recipeSectionRef.current.scrollIntoView({
        behavior: "smooth"
      });
    }
  },[recipe]);

  const addIngredient = (formData) => {
    const newIngredient = formData.get('ingredient');
    if(newIngredient === '') {
      return;
    }
    setIngredients(prevIngredients => [...prevIngredients, newIngredient]);
  };

  const getrecipe = async () => {
    if(isLoading) {
      return;
    }
    setIsLoading(true);
    const recipeMarkdown = await getRecipeFromMistral(ingredients);
    setIsLoading(false);
    setRecipe(recipeMarkdown);
  };

  return (
    <main className='main-content'>
      <form className='add-form' action={addIngredient}>
        <input
          type="text"
          aria-label='Add-ingredient'
          placeholder='e.g. oregano'
          className='add-input'
          name='ingredient'
        />
        <button className='add-button'>Add ingredient</button>
      </form>
      
      {ingredients.length > 0 && <IngredientsList ingredients={ingredients} toggleRecipe={getrecipe} />}
      
    {isLoading && (
      <div className='loading-container'>
        <img src={loadingGif} alt='loading-gif'/>
        <span>Chef Claude is making a recipe for you.</span>
      </div>
    )}

      {recipe && <ClaudeRecipe recipe={recipe} ref={recipeSectionRef}/>}
    </main>
  );
}