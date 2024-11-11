import React, { useEffect, useState } from 'react';
import { Category } from '@/types';
import categoriesService from '@/services/categories';

interface CategoriesProps {
    setCategory: (category: number) => void;
}

const Categories: React.FC<CategoriesProps> = ({ setCategory }) => {

    const [categoriesArray, setCategoriesArray] = useState<Category[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await categoriesService.getAllCategories();
            setCategoriesArray(data);
        }
        fetchData();
    }, []);

    const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedCategoryName = event.target.value;
        if(selectedCategoryName == '0'){
            setCategory(0);
        }
        const selectedCategory = categoriesArray.find(
            category => category.category_name === selectedCategoryName
        );
        if (selectedCategory) {
            setCategory(selectedCategory.category_id);
        }
    };

    return (
        <div>
            <select name="categories" id="categories" onChange={handleCategoryChange}>
                <option value={0}>all</option>
                {categoriesArray.map(category => {
                    return <option key={category.category_id} value={category.category_name}>
                        {category.category_name}</option>;
                }
                )}
            </select>
        </div>
    );
};

export default Categories;
