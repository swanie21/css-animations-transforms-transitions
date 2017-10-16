import React from 'react';
import Styles from './Header.scss';

function Header () {
  return (
    <header className={ Styles.header } role='navigation'>
      <h1 className={ Styles.header__title }>CSS Animations, Transforms & Transitions</h1>
    </header>
  );
}

export default Header;
