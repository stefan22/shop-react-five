import React from 'react';
import ProductCategory from '../product-category';
//helpers
import { CATEGORIES_DATA } from '../../helpers/categories.data';
import './styles.scss';


const ProductsDirectory = () => {
  const categoriesData = CATEGORIES_DATA


    return (
      <div className="products-directory">
        {categoriesData.map((category) =>
            <ProductCategory key={category.id} {...category}  />
        )}
      </div>
    );

}

export default ProductsDirectory;
