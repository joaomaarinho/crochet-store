import React from "react";

import crochetImage from '../../../assets/crochet.jpg';
import classes from './Header.module.css'
import HeaderCarButton from "./HeaderCarButton";

function Header(props) {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>Crochet Store</h1>
        <HeaderCarButton onClick={props.onShowCart} />
      </header>
      <div className={classes['main-image']}>
          <img alt="crochet" src={crochetImage} />
      </div>
    </React.Fragment>
  );
}

export default Header;
