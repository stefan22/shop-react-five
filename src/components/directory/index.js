import React, { Component } from 'react';
import MenuItem from '../menu-item';
//helpers
import { categories } from '../../helpers/categories.data';
import './styles.scss';

class Directory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sections: categories,
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(
          ({ id, ...otherProps }) => (
            <MenuItem key={id} {...otherProps} />
          ),
        )}
      </div>
    );
  }
}

export default Directory;
