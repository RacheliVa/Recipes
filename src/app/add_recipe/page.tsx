// pages/create-recipe.tsx

import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Recipe } from '../../types'
// interface Recipe {
//     _id: string;
//     name: string;
//     Category: number;
//     image_url: string;
//     Components: string[];
//     instructions: string;
// }

// Zod schema for form validation
const recipeSchema = z.object({
    _id: z.string().uuid().optional(), // optional, for new recipes we can generate it on server
    name: z.string().min(1, "Name is required"),
    category: z.number().min(1, "Category must be between 1 and 3").max(3, "Category must be between 1 and 3"),
    image_url: z.string().url("Image URL must be valid"),
    ingredients: z.array(z.string()).nonempty("At least one component is required"),
    instructions: z.string().min(1, "Instructions are required"),
});

const CreateRecipe = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<Recipe>({
        resolver: zodResolver(recipeSchema),
    });

    // Submit handler
    const onSubmit = (data: Recipe) => {
        console.log("Submitted Data: ", data);
        // Make API call here to save the recipe
    };

    return (
        <div>
            <h1>Create a New Recipe</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                {/* Recipe Name */}
                <div>
                    <label htmlFor="name">Recipe Name</label>
                    <input id="name" {...register('name')} />
                    {errors.name && <p>{errors.name.message}</p>}
                </div>

                {/* Category */}
                <div>
                    <label htmlFor="category">category</label>
                    <select id="category" {...register('category')}>
                        <option value="">Select Category</option>
                        {[1, 2, 3].map((category) => (
                            <option key={category} value={category}>
                                category {category}
                            </option>
                        ))}
                    </select>
                    {errors.category && <p>{errors.category.message}</p>}
                </div>

                {/* Image URL */}
                <div>
                    <label htmlFor="image_url">Image URL</label>
                    <input id="image_url" {...register('image_url')} />
                    {errors.image_url && <p>{errors.image_url.message}</p>}
                </div>

                <div>
                    <label htmlFor="ingredients">Ingredients</label>
                    <input id="ingredients" {...register('ingredients')} placeholder="e.g. Flour, Sugar" />
                    {errors.ingredients && <p>{errors.ingredients.message}</p>}
                </div>

                {/* Instructions */}
                <div>
                    <label htmlFor="instructions">Instructions</label>
                    <textarea id="instructions" {...register('instructions')} />
                    {errors.instructions && <p>{errors.instructions.message}</p>}
                </div>

                <button type="submit">Submit Recipe</button>
            </form>
        </div>
    );
};

export default CreateRecipe;
