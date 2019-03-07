import React, { Component } from "react";

export default class Message extends Component {
  render() {
    return (
      <article className={`message ${this.props.styleName}`}>
        <div className="message-header">
          <p>Info</p>
          <button
            className="delete"
            aria-label="delete"
            onClick={this.props.closeHandler}
          />
        </div>
        <div className="message-body">{this.props.message}</div>
      </article>
    );
  }
}
