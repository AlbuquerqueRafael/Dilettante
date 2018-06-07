import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import thunk from 'redux-thunk'
import registerServiceWorker from './registerServiceWorker';
import 'semantic-ui-css/semantic.min.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import App from './components/App';
import HelloWorld from './components/protected/HelloWorld';
import SignUp from './components/signup/SignUp';
import Nav from './Nav'
import PrivateRoute from './PrivateRoute';


const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
)

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <Nav> </Nav>
        <Route path="/" exact component={App} />
        <Route path="/signup" exact component={SignUp} />
        <PrivateRoute path="/protected" component={HelloWorld} />
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
