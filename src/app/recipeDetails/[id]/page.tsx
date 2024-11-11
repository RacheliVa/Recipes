/* "use client"

import React from 'react';
import styles from './recipeDetails.module.css';

interface Recipe {
    title: string;
    ingredients: string;
    preparationTime: number;
    image: string;
}

interface RecipeDetailsProps {
    recipe: Recipe;
}

const RecipeDetails: React.FC<RecipeDetailsProps> = ({ recipe }) => {
    return (
        <div className={styles.recipeDetails}>
            <img src={recipe.image} alt={recipe.title} className={styles.recipeImage} />
            <div className={styles.recipeInfo}>
                <h2 className={styles.recipeTitle}>{recipe.title}</h2>
                <p className={styles.ingredients}><strong>Ingredients:</strong> {recipe.ingredients}</p>
                <p className={styles.preparationTime}><strong>Preparation Time:</strong> {recipe.preparationTime} minutes</p>
            </div>
        </div>
    );
};

export default RecipeDetails;
 */

// app/recipes/[id]/page.tsx

import RecipeDetails from './recipeDetails';

const RecipePage = () => {
    return (
        <div>
            <RecipeDetails />
        </div>
    );
};

export default RecipePage;
