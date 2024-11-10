"use client"

import React from 'react';
import styles from './RecipeTag.module.css';
import { Recipe } from "@/types";


// interface Recipe {
//     title: string;
//     ingredients: string;
//     preparationTime: number;
//     image: string;
// }

interface RecipeTagProps {
    recipe: Recipe;
}

const RecipeTag: React.FC<RecipeTagProps> = ({ recipe }) => {
    return (
        <div className={styles.recipeTag}>
            <img src={recipe.image_url} alt={recipe.name} className={styles.recipeImage} />
            <div className={styles.recipeDetails}>
                <h2 className={styles.recipeTitle}>{recipe.name}</h2>
                <p className={styles.ingredients}><strong>Ingredients:</strong> {recipe.ingredients}</p>
                
            </div>
        </div>
    );
};

export default RecipeTag;
