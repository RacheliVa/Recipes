export interface Recipe {
    id: number;
    name: string,
    category: number,
    imgSrc: string,
    //add
}

export interface Category{
    category_id: number;
    category_name: string;
}