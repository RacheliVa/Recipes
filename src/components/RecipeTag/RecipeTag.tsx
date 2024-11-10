"use client";

import React from 'react';
import styles from './RecipeTag.module.css';
import { Recipe } from "@/types"; // ייבוא האינטרפייס מ-@/types

interface RecipeTagProps {
    recipe: Recipe;
}

const RecipeTag: React.FC<RecipeTagProps> = ({ recipe }) => {
    return (
        <div className={styles.recipeTag}>
            <img src={recipe.imgSrc} alt={recipe.name} className={styles.recipeImage} />
            <div className={styles.recipeDetails}>
                <h2 className={styles.recipeTitle}>{recipe.name}</h2>
                <p className={styles.category}><strong>Category:</strong> {recipe.category}</p>
                {/* ניתן להוסיף מאפיינים נוספים בהתאם למבנה האינטרפייס */}
            </div>
        </div>
    );
};

export default RecipeTag;
