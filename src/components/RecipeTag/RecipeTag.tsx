"use client"

import React from 'react';
import styles from './RecipeTag.module.css';

interface RecipeTagProps {
    title: string;
    ingredients: string;
    preparationTime: number;
    image: string;
}

const RecipeTag: React.FC<RecipeTagProps> = ({ title, ingredients, preparationTime, image }) => {
    return (
        <div className={styles.recipeTag}>
            <img src={image} alt={title} className={styles.recipeImage} />
            <div className={styles.recipeDetails}>
                <h2 className={styles.recipeTitle}>{title}</h2>
                <p className={styles.ingredients}><strong>Ingredients:</strong> {ingredients}</p>
                <p className={styles.preparationTime}><strong>Preparation Time:</strong> {preparationTime} minutes</p>
            </div>
        </div>
    );
};

export default RecipeTag;
