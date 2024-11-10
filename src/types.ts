export interface Recipe {
    _id: string;
    name: string;
    category: number;
    image_url: string;
    ingredients: string[];
    instructions: string;
}