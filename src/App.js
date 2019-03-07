import React, { Component } from "react";
import "./App.scss";
import moment from "moment";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      birth: "",
      death: "",
      yearsLived: "",
      monthsLived: "",
      daysLived: ""
    };
    this.submitForm = this.submitForm.bind(this);
    this.inputChange = this.inputChange.bind(this);
  }

  inputChange(e) {
    const name = e.target.name;
    this.setState({
      [name]: e.target.value
    });
  }

  submitForm(e) {
    e.preventDefault();
    console.log(this.state);
    if ((this.state.birth !== "") & (this.state.death !== "")) {
      const death = moment(this.state.death);
      const birth = moment(this.state.birth);
      const yearsLived = death.diff(birth, "years");
      const monthsLived = death.diff(birth, "months");
      const daysLived = death.diff(birth, "days");
      console.log(
        `Lived for ${yearsLived} years, ${monthsLived} months, and ${daysLived} days.`
      );
    } else if (
      (this.state.birth !== "") &
      (this.state.yearsLived !== "") &
      (this.state.monthsLived !== "") &
      (this.state.daysLived !== "")
    ) {
      const birth = moment(this.state.birth);
      const death = birth
        .add(this.state.yearsLived, "years")
        .add(this.state.monthsLived, "months")
        .add(this.state.daysLived, "days");
      console.log(`Died on ${death}.`);
    } else if (
      (this.state.death !== "") &
      (this.state.yearsLived !== null) &
      (this.state.monthsLived !== "") &
      (this.state.daysLived !== "")
    ) {
      const death = moment(this.state.death);
      const birth = death
        .subtract(this.state.yearsLived, "years")
        .subtract(this.state.monthsLived, "months")
        .subtract(this.state.daysLived, "days");
      console.log(`Born on ${birth}.`);
    }
    this.setState({
      birth: "",
      death: "",
      yearsLived: "",
      monthsLived: "",
      daysLived: ""
    });
  }

  render() {
    return (
      <div className="App">
        <nav
          className="navbar is-black"
          role="navigation"
          aria-label="main navigation"
        >
          <div className="container">
            <div className="navbar-brand">
              <h1 className="navbar-item">Death Calculator</h1>
            </div>
          </div>
        </nav>
        <section className="section">
          <form onSubmit={this.submitForm} className="container">
            <div className="field">
              <label htmlFor="birth" className="label is-medium">
                Born:
              </label>
              <input
                type="date"
                name="birth"
                id="birth"
                value={this.state.birth}
                onChange={this.inputChange}
                className="input"
              />
            </div>
            <div className="field">
              <label htmlFor="died" className="label is-medium">
                Died:
              </label>
              <input
                type="date"
                name="death"
                id="death"
                value={this.state.death}
                onChange={this.inputChange}
                className="input"
              />
            </div>
            <div className="field">
              <div className="field-body">
                <div className="field">
                  <label htmlFor="yearsLived" className="label is-medium">
                    Years Lived:
                  </label>
                  <input
                    type="number"
                    name="yearsLived"
                    id="yearsLived"
                    value={this.state.yearsLived}
                    onChange={this.inputChange}
                    className="input"
                    min="0"
                  />
                </div>
                <div className="field">
                  <label htmlFor="monthsLived" className="label is-medium">
                    Months Lived:
                  </label>
                  <input
                    type="number"
                    name="monthsLived"
                    id="monthsLived"
                    value={this.state.monthsLived}
                    onChange={this.inputChange}
                    className="input"
                    min="0"
                    max="12"
                  />
                </div>
                <div className="field">
                  <label htmlFor="daysLived" className="label is-medium">
                    Days Lived:
                  </label>
                  <input
                    type="number"
                    name="daysLived"
                    id="daysLived"
                    value={this.state.daysLived}
                    onChange={this.inputChange}
                    className="input"
                    min="0"
                    max="31"
                  />
                </div>
              </div>
            </div>
            <div className="field">
              <input
                type="submit"
                value="Submit"
                className="button is-primary is-medium is-fullwidth"
              />
            </div>
          </form>
        </section>
      </div>
    );
  }
}

export default App;
