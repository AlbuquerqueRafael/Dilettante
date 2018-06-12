import React, { Component } from 'react';
import './App.css';
import { login } from '../actions/userAction'
import { connect } from 'react-redux'
import { Button, Form } from 'semantic-ui-react'
import { Card } from 'semantic-ui-react'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.login = this.login.bind(this);
  }

  handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({
      [name]: value,
    });
  }

  login() {
    const user = {"username": this.state.username, 
                  "password": this.state.password};
    console.log(user);
    this.props.dispatch(login(user));
  }

  render() {
    return (
      <div className="App-center-login-card-content">
        <Card>
          <Card.Content header='Dilettante Login' />
          <Card.Content>
            <Form onSubmit={this.login}>
              <Form.Field>
                <input name="username" type="text" 
                       value={this.state.username.value} 
                       onChange={this.handleChange} 
                       placeholder='Username' />
              </Form.Field>
              <Form.Field>
                <input name="password" type="password" 
                       value={this.state.password.value} 
                       onChange={this.handleChange} 
                       placeholder='Password' />
              </Form.Field>
              <Button type='submit'>Submit</Button>
            </Form> 
          </Card.Content>
        </Card>
      </div>
    );
  }
}

export default connect()(App);

