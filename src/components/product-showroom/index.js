import React from 'react';
import ProductPreview from '../product-preview';
import './styles.scss';

const ProductShowroom = ({ title, products }) => {
  const getProductPreview = name => {
    let rowProducts = products[name];
    return rowProducts.map(itm => (
      <ProductPreview
        key={itm.id}
        name={itm.name}
        imageUrl={itm.imageUrl}
        price={itm.price}
        cat={itm.cat}
      />
    ));
  };

  return (
    <div className="products-showroom">
      <h1 className="products-showroom__title">{title}</h1>
      <div className="products-showroom__row">
        {getProductPreview(title)}
      </div>
    </div>
  );
};

export default ProductShowroom;
