"use client"

import React, { useEffect, useState } from 'react';
import recipesService from '@/services/recipes';
import { Recipe } from "@/types";
import RecipeTag from "@/components/RecipeTag/RecipeTag";
import Categories from "@/components/Categories/Categories";

export default function Home() {

  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [filteredRecipes, setFilteredRecipes] = useState<Recipe[]>([]);

  const [filterInput, setFilterInput] = useState<string>('');

  const [category, setCategory] = useState<number>(0);

  useEffect(() => {
    const fetchData = async () => {
      if (category) {
        const data = await recipesService.getRecipeByCategory(category);
        setRecipes(data);
      }
      else {
        const data = await recipesService.getAllRecipes();
        setRecipes(data);
      }
    }
    fetchData();
  }, [category]);

  useEffect(() => {
    const filterData = async () => {
      if (filterInput) {
        setFilteredRecipes(recipes.filter(r => r.name.toLocaleLowerCase().includes(filterInput.toLocaleLowerCase())));
      }
      else {
        setFilteredRecipes(recipes);
      }
    }
    filterData();
  }, [recipes, filterInput]);

  return (
    <div>
      <Categories setCategory={setCategory} />
      <input
        type="text"
        placeholder="Search..."
        value={filterInput}
        onChange={e => setFilterInput(e.target.value)}/>
      <div>
      {filteredRecipes
        .map(recipe => (
          <RecipeTag recipe={recipe} />
        ))}
      </div>
    </div>
  );
}
