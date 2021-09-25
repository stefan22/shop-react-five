import React, { Component } from 'react';
import { PRODUCTS_DATA } from '../../helpers/products.data';
import ProductsShowroom from '../../components/products-showroom';
import './styles.scss';

class ShopPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: PRODUCTS_DATA,
    };
  }

  render() {
    const { products } = this.state;
    const categories = Object.keys(products);

    return (
      <div className="shop-page">
        {categories.map((itm, idx) => (
          <ProductsShowroom
            key={idx}
            title={itm}
            products={products}
            categories={categories}
          />
        ))}
      </div>
    );
  }
}

export default ShopPage;
