import React from 'react';
import { connect } from 'react-redux';

const ProfileInfo = ({ name, email, photoUrl}) => (
  <div className="profile-info">
    <div className="profile-info__photo-container">
      <img className="profile-info__photo" src={photoUrl} alt="" />
    </div>
    <div className="profile-info__info-container">
      <div className="profile-info__info-text">
        <span className="profile-info__title">Name: </span>{name}
      </div>
      <div className="profile-info__info-text">
        <span className="profile-info__title">Email: </span>{email}
      </div>
    </div>
  </div>
);

const mapStateToProps = (state) => ({
  name: state.user.userName,
  email: state.user.email,
  photoUrl: state.user.photoUrl,
});

export default connect(mapStateToProps)(ProfileInfo);
