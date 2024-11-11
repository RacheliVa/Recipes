"use client"

import React, { useEffect, useState } from 'react';
import recipesService from '@/services/recipes';
import { Recipe } from "@/types";
import RecipeTag from "@/components/RecipeTag/RecipeTag";
import Categories from "@/components/Categories/Categories";
import styles from './home.module.css'

export default function Home() {

  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [filteredRecipes, setFilteredRecipes] = useState<Recipe[]>([]);

  const [filterInput, setFilterInput] = useState<string>('');

  const [category, setCategory] = useState<number>(0);

  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (category) {
          const data = await recipesService.getRecipeByCategory(category);
          setRecipes(data);
        }
        else {
          const data = await recipesService.getAllRecipes();
          setRecipes(data);
        }
      }
      catch (err) {
        console.error(err);
        setRecipes([]);
      }
      finally {
        setIsLoading(false);
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
        onChange={e => setFilterInput(e.target.value)} />
      {!isLoading && <div className={styles.recipesList}>
        {filteredRecipes
          .map(recipe => (
            <RecipeTag recipe={recipe} />
          ))}
      </div>}
      {isLoading && <div>Loading...</div>}
    </div>
  );
}


//filter
//paging
//pop
//favories
//gitgnore

//r-add
//y-byid
