import React from 'react';
//import { withRouter } from 'react-router-dom';
import './styles.scss';

const ProductCategory = ({
  name,
  imageUrl,
  size,
  linkUrl,
  history,
  match,
}) => (

  <button
    onClick={() => history.push(`${match.url}${linkUrl}`)}

    style={{
      backgroundImage: `url(${imageUrl})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}
    className={`product-category__item ${
      !size ? 'regular' : size
    }`}
  >
    <div className="category-item">
      <h1 className="category-item__title">{name}</h1>
      <span className="category-item__subtitle">
        SHOP NOW
      </span>
    </div>
  </button>
);

export default ProductCategory;
