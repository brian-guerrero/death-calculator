import React, { Component } from "react";
import BirthField from "./BirthField";
import DeathField from "./DeathField";
import LivedFields from "./LivedFields";
import {
  calculateTimeLived,
  calculateDeathDate,
  calculateBirthDate
} from "../../functions";

export default class Form extends Component {
  constructor(state) {
    super(state);
    this.submitForm = this.submitForm.bind(this);
    this.inputChange = this.inputChange.bind(this);
    this.livedChange = this.livedChange.bind(this);
    this.state = {
      birth: "",
      death: "",
      lived: {
        years: "",
        months: "",
        days: ""
      }
    };
  }

  inputChange(e) {
    const name = e.target.name;
    this.setState({
      [name]: e.target.value
    });
  }

  livedChange(e) {
    const name = e.target.name;
    const updatedLived = { ...this.state.lived, [name]: e.target.value };

    this.setState({
      lived: updatedLived
    });
  }

  submitForm(e) {
    e.preventDefault();
    let message;
    if (
      (this.props.born === true) &
      (this.props.died === true) &
      (this.state.born !== "" && this.state.death !== "")
    ) {
      message = calculateTimeLived(this.state.birth, this.state.death);
    } else if (
      (this.props.born === true) &
      (this.props.time === true) &
      (this.state.born !== "" &&
        !isNaN(this.state.lived.years) &&
        !isNaN(this.state.lived.months) &&
        !isNaN(this.state.lived.days))
    ) {
      message = calculateDeathDate(this.state.birth, this.state.lived);
    } else if (
      (this.props.died === true) &
      (this.props.time === true) &
      (this.state.death !== "" &&
        !isNaN(this.state.lived.years) &&
        !isNaN(this.state.lived.months) &&
        !isNaN(this.state.lived.days))
    ) {
      message = calculateBirthDate(this.state.death, this.state.lived);
    }
    if (message) {
      this.setState({
        birth: "",
        death: "",
        lived: {
          years: "",
          months: "",
          days: ""
        }
      });
      this.props.submitHandler(message);
    } else {
      this.props.errorHandler(`Please enter values.`);
    }
  }

  render() {
    return (
      <form onSubmit={this.submitForm}>
        <div className="field">
          <div className="field-body">
            {this.props.born === true && (
              <BirthField
                birth={this.state.birth}
                death={this.state.death}
                onChange={this.inputChange}
              />
            )}
            {this.props.died === true && (
              <DeathField
                birth={this.state.birth}
                death={this.state.death}
                onChange={this.inputChange}
              />
            )}
          </div>
        </div>
        <div className="field">
          {this.props.time === true && (
            <LivedFields lived={this.state.lived} onChange={this.livedChange} />
          )}
        </div>
        <div className="field">
          <input
            type="submit"
            value="Submit"
            className="button is-primary is-medium is-fullwidth"
          />
        </div>
      </form>
    );
  }
}
