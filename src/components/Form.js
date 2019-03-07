import React, { Component } from 'react'
import { calculateTimeLived, calculateDeathDate, calculateBirthDate } from '../functions';

export default class Form extends Component {
    constructor(state) {
        super(state);
        this.submitForm = this.submitForm.bind(this);
        this.inputChange = this.inputChange.bind(this);
        this.state = {
            birth: "",
            death: "",
            lived: {
                years: "",
                months: "",
                days: "",
            }
        }
    }

    inputChange(name, e) {
        if (name == null) {
            const name = e.target.name;
            this.setState({
                [name]: e.target.value
            })
        } else {
            this.setState({
                [name]: e.target.value
            })
        }
    }


    submitForm(e) {
        e.preventDefault();
        let message;
        console.log(this.state.lived);
        if ((this.state.birth !== "") & (this.state.death !== "")) {
            message = calculateTimeLived(this.state.birth, this.state.death);
        } else if (
            (this.state.birth !== "") &
            (this.state.lived.years !== "") &
            (this.state.lived.months !== "") &
            (this.state.lived.days !== "")
        ) {
            message = calculateDeathDate(this.state.birth, this.state.lived);
        } else if (
            (this.state.death !== "") &
            (this.state.lived.years !== null) &
            (this.state.lived.months !== "") &
            (this.state.lived.days !== "")
        ) {
            message = calculateBirthDate(this.state.death, this.state.lived);
        }
        this.setState({
            birth: "",
            death: "",
            lived: {
                years: "",
                months: "",
                days: "",
            }
        });
        this.props.submitHandler(message);
    }

    render() {
        return (
            <form onSubmit={this.submitForm}>
                <div className="field">
                    <div className="field-body">
                        <div className="field">
                            <label htmlFor="birth" className="label is-medium">
                                Born:
                            </label>
                            <input
                                type="date"
                                name="birth"
                                id="birth"
                                max={this.state.death}
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
                                min={this.state.birth}
                                value={this.state.death}
                                onChange={this.inputChange}
                                className="input"
                            />
                        </div>
                    </div>
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
                                value={this.state.lived.years}
                                onChange={this.inputChange("lived.years")}
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
                                value={this.state.lived.months}
                                onChange={this.inputChange("lived.months")}
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
                                value={this.state.lived.days}
                                onChange={this.inputChange("lived.days")}
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
        )
    }
}
