import React, { useCallback, useEffect, useRef, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { userLogOut } from '../../actions';
import { MAIN_PAGE, NEWS_PAGE, PROFILE_PAGE } from '../../constants/paths';
import BurgerCross from '../shared/burger-cross/burger-cross';

const Header = ({ isUserLoggedIn, logOut }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const ref = useRef(null);

  const clickListener = useCallback(
    (e) => {
      if (ref.current && ref.current.contains(e.target)) {
        setIsMenuOpen(false);
      }
    },
    [ref.current]
  );

  useEffect(() => {
    document.addEventListener('click', clickListener);
    return () => {
      document.removeEventListener('click', clickListener);
    };
  }, []);

  const handleClose = () => setIsMenuOpen(false);

  return (
    <div className="header">
      <div className={`header__backdrop ${isMenuOpen ? 'active' : ''}`} ref={ref} />
      <div className="header__burger-container">
        <BurgerCross onClick={() => setIsMenuOpen(prev => !prev)} isActive={isMenuOpen} />
      </div>
      <nav className={`header__nav ${isMenuOpen ? 'active' : ''}`}>
        <Link to={MAIN_PAGE} onClick={handleClose} className="header__nav-item">
          На главную
        </Link>
        <Link to={NEWS_PAGE} onClick={handleClose} className="header__nav-item">
          Новости
        </Link>
        <Link to={PROFILE_PAGE} onClick={handleClose} className="header__nav-item">
          Профиль
        </Link>
        {isUserLoggedIn ? (
          <div className="header__nav-item" onClick={logOut}>
            Выход
          </div>
        ) : null}
      </nav>
  </div>
  );
};

const mapStateToProps = (state) => ({
  isUserLoggedIn: state.isUserLoggedIn,
});

const mapDispatchToProps = (dispatch) => ({
  logOut: () => dispatch(userLogOut()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
