import React, { Component } from 'react';
import './SignUp.css';
import { signup } from '../../actions/userAction'
import { Button, Checkbox, Form, Dropdown, Card } from 'semantic-ui-react'
import userService from '../../services/UserService';
import { connect } from 'react-redux'

class SignUpForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      day: '',
      password: '',
      repeatpassword: '',
      month: '',
      year: '',
    };
    this.days = userService.getTimeArray(1, 31, false);
    this.months = userService.getTimeArray(1, 12, false);
    this.years = userService.getTimeArray(1905, 2007, true);
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeDropdown = this.handleChangeDropdown.bind(this);
    this.createUser = this.createUser.bind(this);
  }

  handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({
      [name]: value,
    });
  }

  handleChangeDropdown(event, data) {
    const name = data.name;
    const value = data.value;

    this.setState({
      [name]: value,
    });
   
  }

  createUser() {
    const date = new Date(this.state.year, this.state.month, this.state.day);
    
    if (this.state.year == '' ||  this.state.month == '' || this.state.day == '') {
      alert("Please, provide a valid birth date");
    } else {
      const user = {"username": this.state.username, 
      "password": this.state.password,
      "email": this.state.email,
      "birthDate": date.toISOString()};

      this.props.dispatch(signup(user));
    }


  }

  render() {
    return (
      <Card.Content>
      <Form onSubmit={this.createUser}>
        <Form.Field>
          <input name="username" type="text" 
                 value={this.state.username.value} 
                 onChange={this.handleChange} 
                 placeholder='Username' />
        </Form.Field>
        <Form.Field>
          <input name="email" type="text" 
                 value={this.state.email.value} 
                 onChange={this.handleChange} 
                 placeholder='Email' />
        </Form.Field>
        <Form.Field>
          <input name="password" type="password" 
                 value={this.state.password.value} 
                 onChange={this.handleChange} 
                 placeholder='Password' />
        </Form.Field>
        <Form.Field>
          <input name="repeatpassword" type="password" value={this.state.repeatpassword.value} 
                 onChange={this.handleChange} 
                 placeholder='Repeat Password' />
        </Form.Field>
        <Form.Group inline>
          <Form.Field >
            <label>Day: </label>
            <Dropdown className="SignUp-select-width"
                      value={this.state.day} 
                      name="day"
                      placeholder='Day' 
                      onChange={this.handleChangeDropdown} 
                      search options={this.days} />
          </Form.Field>
          <Form.Field>
            <label>Month: </label>
            <Dropdown className="SignUp-select-width" 
                      value={this.state.month} 
                      name="month"
                      placeholder='Month' 
                      onChange={this.handleChangeDropdown} 
                      search options={this.months} />
          </Form.Field>
          <Form.Field >
            <label> Year: </label> 
            <Dropdown className="SignUp-select-width" 
                      value={this.state.year} 
                      name="year"
                      placeholder='Year' 
                      onChange={this.handleChangeDropdown} 
                      search options={this.years} />
          </Form.Field>
        </Form.Group>
        <Button type='submit'>Create New Account</Button>
      </Form> 
    </Card.Content>
    );
  }
}

export default connect()(SignUpForm);
