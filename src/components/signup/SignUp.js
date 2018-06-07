import React, {Component } from 'react';
import PropTypes from 'prop-types';
import { login } from '../../actions/userAction'
import { Button, Checkbox, Form } from 'semantic-ui-react'
import { connect } from 'react-redux'

class SignUp extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      username: '',
      email: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.createUser = this.createUser.bind(this);
  }

  handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({
      [name]: value
    });
  }

  createUser() {
    const user = {"username": this.state.username, "password": this.state.password};
    this.props.dispatch(login(user));
  }


  render() {
    return (
      <div>
        <Form onSubmit={this.createUser}>
          <Form.Field>
            <input name="username" value={this.state.username.value} onChange={this.handleChange} placeholder='Username' />
          </Form.Field>
          <Form.Field>
            <input name="email"  value={this.state.email.value} onChange={this.handleChange} placeholder='Email' />
          </Form.Field>
          <Form.Field>
            <input name="password" value={this.state.email.password} onChange={this.handleChange} placeholder='Password' />
          </Form.Field>
          <Form.Field>
            <Checkbox label='I agree to the Terms and Conditions' />
          </Form.Field>
          <Button type='submit'>Create New Account</Button>
        </Form> 
      </div>
    );
  }
}

SignUp.propTypes = {
  username: PropTypes.object.isRequired
};

export default connect()(SignUp);
