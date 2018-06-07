import React, { Component } from 'react'
import {Menu } from 'semantic-ui-react'
import { withRouter} from "react-router-dom";

const { activeItem } = 'home';

class Nav extends Component {

  changeLocation(url, event) {
    this.props.history.push(url);
  }

  render() {
    return(
      <div>
        <Menu pointing>
          <Menu.Item name='home' active={activeItem === 'home'} onClick={this.changeLocation.bind(this, '/')} />
          <Menu.Item name='protected' active={activeItem === 'protected'} onClick={this.changeLocation.bind(this, '/protected')} />
          <Menu.Item name='signup' active={activeItem === 'signup'} onClick={this.changeLocation.bind(this, '/signup')} />
        </Menu>
      </div>
    )
  }
}

export default withRouter(Nav);