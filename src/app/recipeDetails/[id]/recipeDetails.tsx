import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import styles from './recipeDetails.module.css';
import  recipesService  from '@/services/recipes'

interface Recipe {
    title: string;
    ingredients: string;
    preparationTime: number;
    image: string;
}

const RecipeDetails: React.FC = () => {
    const router = useRouter();
    const { id } = router.query;  
    const [recipe, setRecipe] = useState<Recipe | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!id) return;

        const fetchRecipe = async () => {
            setLoading(true);
            try {
                const recipeData = await recipesService.getRecipeById(Number(id));
                setRecipe(recipeData);
                setLoading(false);
            } catch (err: any) {
                setError('Failed to fetch recipe.');
                setLoading(false);
            }
        };

        fetchRecipe();
    }, [id]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;
    if (!recipe) return <p>No recipe found.</p>;

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
