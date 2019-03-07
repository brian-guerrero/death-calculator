import React, { Component } from 'react'
import Message from './Message';

export default class ErrorMessage extends Component {
  render() {
    return (
      <Message
      styleName="is-danger"
      message={this.props.message}
      closeHandler={this.props.closeHandler}
    />    
    )
  }
}
