import React, {Component } from 'react';
import { Message } from 'semantic-ui-react'
import { connect } from 'react-redux';

class Alert extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };
  }

  componentWillReceiveProps() {
    this.setState({ visible: true })
  }


  handleDismiss = () => {
    this.setState({ visible: false })
  }

  render() {
    const listErrors = this.props.alert.messages;
    
    if (this.state.visible) {
      return (
        this.props.alert.messages.length > 0 ? <Message error
        onDismiss={this.handleDismiss}
        header='There was some errors with your submission'
        list={listErrors} /> : null
      );
    } else {
      return (null);
    }
   
    
  }
}

function mapStateToProps(state) {
  const { alert } = state;

  return {
    alert
  }
}

export default connect(mapStateToProps)(Alert);
