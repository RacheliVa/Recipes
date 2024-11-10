"use client"

import React, { useEffect, useState } from 'react';
import recipesService from '@/services/recipes';
import { Recipe } from "@/types";
import RecipeTag from "@/components/RecipeTag/RecipeTag";
import Categories from "@/components/Categories/Categories";

export default function Home() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [category, setCategory] = useState<number>(0);

  useEffect(() => {
    const fetchData = async () => {
      if(category){
        const data = await recipesService.getRecipeByCategory(category);
        setRecipes(data);
      }
      else{
        const data = await recipesService.getAllRecipes();
        setRecipes(data);
      }
    }
    fetchData();
  }, [category]);

  return (
    <div>
      <Categories setCategory={setCategory} />
      {recipes
        .map(recipe => (
          <RecipeTag recipe = { recipe}/>
      ))}
    </div>
  );
}
