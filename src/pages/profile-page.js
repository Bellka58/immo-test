import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import ProfileInfo from '../components/profile-info';
import { LOGIN_PAGE } from '../constants/paths';

const ProfilePage = ({ isUserLoggedIn }) => {
  if (!isUserLoggedIn) {
    return (<Redirect to={LOGIN_PAGE} /> )
  }
  return (
    <div>
      <h1>Профиль</h1>
      <ProfileInfo />
    </div>
  );
};

const mapStateToProps = (state) => ({
  isUserLoggedIn: state.isUserLoggedIn,
});

export default connect(mapStateToProps)(ProfilePage);
