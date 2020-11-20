import React from 'react';
import './burger-cross.scss';

const BurgerCross = ({ isActive, ...props }) => {
    const activeClass = isActive ? 'active' : '';
    return (
    <div className="burger-cross" {...props}>
    <div className="burger-cross__burger">
      <span className={`burger-cross__burger-line ${activeClass}`}></span>
      <span className={`burger-cross__burger-line ${activeClass}`}></span>
      <span className={`burger-cross__burger-line ${activeClass}`}></span>
    </div>
    <div className="burger-cross__cross">
      <span className={`burger-cross__cross-line ${activeClass}`}></span>
      <span className={`burger-cross__cross-line ${activeClass}`}></span>
    </div>
  </div>
);
}

export default BurgerCross;
