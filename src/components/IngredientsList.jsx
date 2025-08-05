import './IngredientsList.css';

export default function IngredientsList({ingredients, toggleRecipe}) {
  return (
    <section className='ingredients-list-container'>
      <div className='ingredients-content'>
        <h2>Ingredients on hand:</h2>
        <ul className='ingredients-list' aria-live='polite'>
          {ingredients.map(ingredient => {
            return <li key={ingredient}>{ingredient}</li>
          })}
        </ul>
      </div>
      {ingredients.length > 3 && 
      <div className="get-recipe-container">
        <div className='get-recipe-text'>
          <h3>Ready for recipe?</h3>
          <p>Generate a recipe from your list of ingredients</p>
        </div>
        <button className='get-recipe-button' onClick={toggleRecipe}>
          Get a recipe
        </button>
      </div>}
    </section>
  );
}