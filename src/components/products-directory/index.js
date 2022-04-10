import React, { Component } from 'react';
import ProductCategory from '../product-category';
//helpers
import { CATEGORIES_DATA } from '../../helpers/categories.data';
import './styles.scss';


class ProductsDirectory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: CATEGORIES_DATA,
    };
  }

  render() {
    return (
      <div className="products-directory">
        {this.state.categories.map(
          ({ id, ...otherProps }) => (
            <ProductCategory key={id} {...otherProps} />
          ),
        )}
      </div>
    );
  }
}

export default ProductsDirectory;
