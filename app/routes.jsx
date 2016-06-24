import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from 'containers/App';
import Profile from 'containers/Profile';
import Collection from 'containers/Collection'
import Home from 'containers/Home';
import Login from 'containers/Login';
import SignUp from 'containers/SignUp';
import AddItem from 'containers/AddItem';

/*
 * @param {Redux Store}
 * We require store as an argument here because we wish to get
 * state from the store after it has been authenticated.
 */
export default (store) => {
  return (
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path = "profile" component={Profile} />
      <Route path="collection/:slug" component={Collection} />
      <Route path = "additem/:slug" component = {AddItem} />
      <Route path="login" component={Login} />
      <Route path="signup" component ={SignUp} />
    </Route>
  );
};
