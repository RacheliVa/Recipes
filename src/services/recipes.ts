import {http} from './http';
import { Recipe } from '@/types';

const recipesService = {
    async getAllRecipes(){
        try {
            const response = await http.get('/recipes');
            return response.data;
        } catch (error : any) {
            console.error(error);
        }
    },

    async getRecipeById(id: number){
        try {
            const response = await http.get(`/recipes/${id}`);
            return response.data;
        } catch (error : any) {
            console.error(error);
        }
    },

    async addRecipe(recipe: Recipe){
        try {
            const response = await http.post('/recipes', recipe);
            return response.data;
        } catch (error : any) {
            console.error(error);
        }
    }
}

console.log(recipesService.getAllRecipes());