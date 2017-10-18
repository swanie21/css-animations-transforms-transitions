import React from 'react';
import Styles from './App.scss';
import Header from '../../components/Header/Header';

function App () {
  return (
    <div>
      <Header />
      <div className={ Styles['box-container'] }>
        <div className={ Styles['box-frame'] }></div>
        <div className={ Styles['box-frame'] }></div>
        <div className={ Styles['box-frame'] }></div>
        <div className={ Styles['box-frame'] }></div>
        <div className={ Styles['box-frame'] }></div>
        <div className={ Styles['box-frame'] }></div>
        <div className={ Styles['box-frame'] }></div>
        <div className={ Styles['box-frame'] }></div>
      </div>
    </div>
  );
}

export default App;
