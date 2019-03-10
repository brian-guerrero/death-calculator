import React, { Component } from "react";

export default class Selector extends Component {
  constructor(props) {
    super(props);
    this.state = {
      born: this.props.born,
      died: this.props.died,
      time: this.props.time
    };
    // this.formSubmit = this.formSubmit.bind(this);
    this.inputChange = this.inputChange.bind(this);
  }

  inputChange(e) {
    const name = e.target.name;
    const value = e.target.checked;
    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <form onSubmit={this.props.onSubmit}>
        <div className="field">
          <label className="label is-medium">
            What information do you have?
          </label>
          <div className="control">
            <label htmlFor="born" className="checkbox ">
              <input
                type="checkbox"
                name="born"
                className="check"
                checked={this.state.born}
                onChange={this.inputChange}
              />
              Born
            </label>
          </div>
          <div className="control">
            <label htmlFor="died" className="checkbox">
              <input
                type="checkbox"
                name="died"
                className="check"
                checked={this.state.died}
                onChange={this.inputChange}
              />
              Died
            </label>
          </div>
          <div className="control">
            <label htmlFor="time" className="checkbox">
              <input
                type="checkbox"
                name="time"
                className="check"
                checked={this.state.time}
                onChange={this.inputChange}
              />
              Time Lived
            </label>
          </div>
        </div>
        <div className="field">
          <input
            type="submit"
            value="Update"
            className="button is-link is-medium is-fullwidth"
          />
        </div>
      </form>
    );
  }
}
