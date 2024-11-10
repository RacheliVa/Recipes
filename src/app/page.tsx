"use client"

import Image from "next/image";
import { useEffect, useState } from "react";
import recipesService from '@/services/recipes'
import { Recipe } from "@/types";
import RecipeTag from "@/components/RecipeTag/RecipeTag";

export default function Home() {

  const [recipes, setRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await recipesService.getAllRecipes();
      setRecipes(data);
    }
    fetchData();
  }, []);

  return (
    <div>
      <div>

      </div>
      {recipes.map(recipe =>
        <div key={recipe.id}>

          <RecipeTag recipe={recipe} />

        </div>
      )}
    </div>
  );
}
