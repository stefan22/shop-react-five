import React from 'react';
import { withRouter } from 'react-router-dom';
import './styles.scss';

const MenuItem = ({
  name,
  imageUrl,
  size,
  linkUrl,
  history,
  match,
}) => (
  <div
    onClick={() => history.push(`${match.url}${linkUrl}`)}
    style={{
      backgroundImage: `url(${imageUrl})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}
    className={`directory-menu__item ${
      !size ? 'regular' : size
    }`}
  >
    <div className="content-item">
      <h1 className="content-item__title">{name}</h1>
      <span className="content-item__subtitle">
        SHOP NOW
      </span>
    </div>
  </div>
);

export default withRouter(MenuItem);
