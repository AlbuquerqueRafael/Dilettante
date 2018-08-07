import React, {Component } from 'react';
import { signup } from '../../actions/userAction'
import { Button, Checkbox, Form, Dropdown, Card } from 'semantic-ui-react'
import './SignUp.css';
import SignUpForm from './SignUpForm';
import Alert from '../alert/Alert';

class SignUp extends Component {
  
  render() {
    return (
      <div className="SignUp-center-login-card-content">
        <Card className="SignUp-card-width">
          <Card.Content header='Signup' />
          <Alert />
          <SignUpForm />
        </Card>
      </div>
    );
  }
}

export default SignUp;
