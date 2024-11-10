"use client"

import React from 'react';
import styles from './RecipeTag.module.css';

interface Recipe {
    title: string;
    ingredients: string;
    preparationTime: number;
    image: string;
}

interface RecipeTagProps {
    recipe: Recipe;
}

const RecipeTag: React.FC<RecipeTagProps> = ({ recipe }) => {
    return (
        <div className={styles.recipeTag}>
            <img src={recipe.image} alt={recipe.title} className={styles.recipeImage} />
            <div className={styles.recipeDetails}>
                <h2 className={styles.recipeTitle}>{recipe.title}</h2>
                <p className={styles.ingredients}><strong>Ingredients:</strong> {recipe.ingredients}</p>
                <p className={styles.preparationTime}><strong>Preparation Time:</strong> {recipe.preparationTime} minutes</p>
            </div>
        </div>
    );
};

export default RecipeTag;
