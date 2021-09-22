import React, {Component} from "react";
import MenuItem from "../menu-item";
import "./styles.scss";
//category images
import menHat from "../../images/hat3-men.jpg";
import jackets from "../../images/jax8.jpg";
import sneakers from "../../images/con1.jpg";
import woman from "../../images/women-selfie.jpg";
import man from "../../images/sh2.jpg";

class Directory extends Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: "HATS",
          imageUrl: menHat,
          id: 1,
          size: "regular",
          linkUrl: "hats",
        },
        {
          title: "JACKETS",
          imageUrl: jackets,
          id: 2,
          size: "regular",
          linkUrl: "jackets",
        },
        {
          title: "SNEAKERS",
          imageUrl: sneakers,
          id: 3,
          size: "regular",
          linkUrl: "sneakers",
        },
        {
          title: "WOMEN",
          imageUrl: woman,
          size: "large",
          id: 4,
          linkUrl: "women",
        },
        {
          title: "MEN",
          imageUrl: man,
          size: "large",
          id: 5,
          linkUrl: "men",
        },
      ],
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({id, ...otherProps }) => (
          <MenuItem 
            key={id} 
            {...otherProps}
          />
        ))}
      </div>
    );
  }
}

export default Directory;
