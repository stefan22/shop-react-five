import React, { Component } from 'react';
import { Outlet} from "react-router-dom";
import { PRODUCTS_DATA } from '../../helpers/products.data';
import ProductsShowroom from '../../components/products-showroom';
import Hats from "../categories/hats";
import { motion } from 'framer-motion';
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
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
        className="shop-page"
      >

        <Outlet>
          <Hats />

        </Outlet>


        {categories.map((itm, idx) => (
          <ProductsShowroom
            key={idx}
            title={itm}
            products={products}
            categories={categories}
          />

        ))}

      </motion.div>
    );
  }
}

export default ShopPage;
