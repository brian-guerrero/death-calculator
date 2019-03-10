import React, { Component } from "react";
import "./App.scss";
import Nav from "./components/Nav";
import InfoMessage from "./components/messages/InfoMessage";
import ErrorMessage from "./components/messages/ErrorMessage";
import Form from "./components/Form";
import Selector from "./components/Selector";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "",
      error: "",
      born: true,
      died: true,
      time: false
    };
    this.setMessage = this.setMessage.bind(this);
    this.setError = this.setError.bind(this);
    this.closeError = this.closeError.bind(this);
    this.closeMessage = this.closeMessage.bind(this);
    // this.updateView = this.updateView.bind(this);
    this.formSubmit = this.formSubmit.bind(this);
  }

  setError(msg) {
    this.setState({ error: msg });
  }

  setMessage(msg) {
    this.setState({ message: msg });
  }

  closeError(e) {
    this.setState({ error: "" });
  }

  closeMessage(e) {
    e.preventDefault();
    this.setState({ message: "" });
  }

  updateView(components) {
    this.setState({ components });
    console.log(this.state);
  }

  formSubmit(e) {
    e.preventDefault();
    const checkboxes = e.target.querySelectorAll("input[type='checkbox']");
    let fields = {};
    checkboxes.forEach(checkbox => {
      fields = { ...fields, [checkbox.name]: checkbox.checked };
    });
    if (fields.born === true && fields.died === true && fields.time === true) {
      this.setError("Please only choose two fields.");
    } else {
      this.closeError();
      this.setState(fields);
    }
  }

  render() {
    return (
      <div className="App">
        <Nav />
        <section className="section container">
          {this.state.error !== "" && (
            <ErrorMessage
              message={this.state.error}
              closeHandler={this.closeError}
            />
          )}
          <Selector
            // updateView={this.updateView}
            // errorHandler={this.setError}
            born={this.state.born}
            died={this.state.died}
            time={this.state.time}
            onSubmit={this.formSubmit}
          />
          <br />
          {this.state.message !== "" && (
            <InfoMessage
              message={this.state.message}
              closeHandler={this.closeMessage}
            />
          )}

          <Form
            submitHandler={this.setMessage}
            errorHandler={this.setError}
            born={this.state.born}
            died={this.state.died}
            time={this.state.time}
          />
        </section>
      </div>
    );
  }
}

export default App;
