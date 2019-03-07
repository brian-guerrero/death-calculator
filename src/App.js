import React, { Component } from "react";
import "./App.scss";
import Nav from "./components/Nav";
import InfoMessage from "./components/messages/InfoMessage";
import Form from "./components/Form"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: ""
    };
    this.setMessage = this.setMessage.bind(this);
    this.closeMessage = this.closeMessage.bind(this);

  }

  setMessage(msg) {
    this.setState({ message: msg });
  }

  closeMessage(e) {
    e.preventDefault();
    this.setState({ message: "" });
  }

  render() {
    return (
      <div className="App">
        <Nav />
        <section className="section container">
          {this.state.message !== "" && (
            <InfoMessage
              message={this.state.message}
              closeHandler={this.closeMessage}
            />
          )}
          <Form submitHandler={this.setMessage} />
        </section>
      </div>
    );
  }
}

export default App;
