import React from 'react';
import Styles from './App.scss';
import Header from '../../components/Header/Header';
import Box from '../../components/Box/Box';

function App () {
  return (
    <div>
      <Header />
      <div className={ Styles['box-container'] }>
        <div className={ Styles['box-frame'] }>
          <Box action='move-right' />
        </div>
        <div className={ Styles['box-frame'] }>
          <Box action='move-left' />
        </div>
        <div className={ Styles['box-frame'] }>
          <Box action='move-up' />
        </div>
        <div className={ Styles['box-frame'] }>
          <Box action='move-down' />
        </div>
        <div className={ Styles['box-frame'] }>
          <Box action='change-color' />
        </div>
        <div className={ Styles['box-frame'] }>
          <Box action='change-size' />
        </div>
        <div className={ Styles['box-frame'] }>
          <Box action='pulse' />
        </div>
        <div className={ Styles['box-frame'] }>
          <Box action='shake' />
        </div>
      </div>
    </div>
  );
}

export default App;
