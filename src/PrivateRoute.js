import React from "react";
import {
  Route,
  Redirect,
} from "react-router-dom";
import storageService from './services/StorageService';


const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      storageService.isUserAuth() ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/",
            state: { from: props.location }
          }}
        />
      )
    }
  />
);

export default PrivateRoute;
