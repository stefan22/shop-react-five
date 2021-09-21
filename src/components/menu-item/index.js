import React from "react";
import "./styles.scss";

const MenuItem = ({title, imageUrl, size}) => (
  <div
    style={{ backgroundImage: `url(${imageUrl})`, backgroundSize:'cover', backgroundPosition: 'center'}}
    className={`directory-menu__item ${size}`}
  >
    <div className="content-item">
      <h1 className="content-item__title">{title}</h1>
      <span className="content-item__subtitle">SHOP NOW</span>
    </div>
  </div>
);

export default MenuItem;
