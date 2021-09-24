import React, { Component } from 'react';
import MenuItem from '../menu-item';
//helpers
import { CATEGORIES_DATA } from '../../helpers/categories.data';
import './styles.scss';

class Directory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: CATEGORIES_DATA,
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.categories.map(
          ({ id, ...otherProps }) => (
            <MenuItem key={id} {...otherProps} />
          ),
        )}
      </div>
    );
  }
}

export default Directory;
