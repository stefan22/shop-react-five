import React from 'react';
import './styles.scss';

const ProductPreview = ({ id, name, price, imageUrl }) => (
  <div key={id} className="product-preview">
    <div className="image-preview">
      <img src={imageUrl} alt={name} width="300" height="350" />
    </div>
    <div className="product-footer">
      <span className="product-footer__name">{name}</span>
      <span className="product-footer__price">{price}</span>
    </div>
  </div>
);

export default ProductPreview
