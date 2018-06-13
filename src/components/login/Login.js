import React, { Component } from 'react';
import './Login.css';
import LoginForm from './LoginForm';
import Alert from '../alert/Alert';
import { Card } from 'semantic-ui-react'

class Login extends Component {
  render() {
    return (
      <div className="Login-center-login-card-content">
        <Card>
          <Card.Content header='Dilettante Login' />
          <Alert />
          <LoginForm />
        </Card>
      </div>
    );
  }
}

export default Login;
