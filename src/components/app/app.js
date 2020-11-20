import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { LOGIN_PAGE, MAIN_PAGE, NEWS_PAGE, PROFILE_PAGE } from '../../constants/paths';
import { MainPage, NewsPage, LoginPage, ProfilePage } from '../../pages';
import store from '../../store';
import Header from '../header';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className="app__container">
          <Header />
          <div className="app">
            <Route exact path={MAIN_PAGE} component={MainPage} />
            <Route path={NEWS_PAGE} component={NewsPage} />
            <Route path={LOGIN_PAGE} component={LoginPage} />
            <Route path={PROFILE_PAGE} component={ProfilePage}>
            </Route>
          </div>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
