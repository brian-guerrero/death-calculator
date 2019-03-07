import React, { Component } from 'react'
import Message from './Message';

export default class InfoMessage extends Component {
  render() {
    return (
      <Message
        styleName="is-info"
        message={this.props.message}
        closeHandler={this.props.closeHandler}
      />
    )
  }
}
