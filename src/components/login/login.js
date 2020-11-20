import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {
  userLogInFailure,
  userLogInRequest,
  userLogInSuccess,
} from '../../actions';
import { PROFILE_PAGE } from '../../constants/paths';
import { logInLoadRequest } from '../../utils';
import Loader from '../shared/loader/loader';

const LogIn = ({
  loginRequest,
  loginSuccess,
  loginFailure,
  isLoading,
}) => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const history = useHistory();

  const setValue = (func) => (e) => {
    setError('');
    func(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !password) {
      setError('Не все поля заполнены');
      return;
    }
    loginRequest();
    logInLoadRequest(name, password)
      .then((res) => {
        loginSuccess(res);
        history.push(PROFILE_PAGE);
      })
      .catch((error) => {
        loginFailure(error);
        setError('Имя пользователя или пароль введены не верно');
      });
  };

  return (
    <div className="login__container">
      <div className="login">
        <h2 className="login__title">Вход</h2>
        <div className="login__error">{error ? error : null}</div>
        <form className="login__form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            className="login__input text-input"
            value={name}
            onChange={setValue(setName)}
            placeholder="Имя"
          />
          <input
            type="password"
            name="current-password"
            className="login__input text-input"
            value={password}
            onChange={setValue(setPassword)}
            placeholder="Пароль"
          />
          <button
            className="login__submit-button button"
            style={isLoading ? { paddingTop: 0, paddingBottom: 0 } : null}
            onClick={handleSubmit}
          >
            {!isLoading ? 'Войти' : <Loader size={20} lineWidth={2} />}
          </button>
        </form>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  loginRequest: () => dispatch(userLogInRequest()),
  loginSuccess: (data) => dispatch(userLogInSuccess(data)),
  loginFailure: (error) => dispatch(userLogInFailure(error)),
});

const mapStateTopProps = (state) => ({
  isLoading: state.loading,
});

export default connect(mapStateTopProps, mapDispatchToProps)(LogIn);
