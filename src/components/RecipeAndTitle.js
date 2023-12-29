import React from 'react'
import recipes from '../RecipeDB'

export default function RecipeAndTitle(props) {

    const { recipe, generateRandomRecipe } = props;
    return (
        <div className="card" >
            
            <div className="card-body">
                {recipe.ingredient.map((recipeItem, index) => (
                    <p key={index} className="card-text" style={{ fontSize: '70px' }}>
                        -{recipeItem}
                    </p>
                ))}
                {recipe.recipe.map((recipeItem, index) => (
                    <p key={index} className="card-text" style={{ fontSize: '70px' }}>
                        ({index + 1}) {recipeItem}
                    </p>
                ))}
                <button 
                    style={{ fontSize: '50px' }}
                    onClick={() => { generateRandomRecipe(recipes) }}
                    type="submit">
                    <i class="fas fa-mouse"></i> Generate Recipe
                </button>
                
            </div>
        </div>
    )
}