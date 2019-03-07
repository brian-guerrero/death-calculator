import React, { Component } from 'react'
import moment from "moment";

export default class Form extends Component {
    constructor(state) {
        super(state);
        this.submitForm = this.submitForm.bind(this);
        this.inputChange = this.inputChange.bind(this);
        this.state = {
            birth: "",
            death: "",
            yearsLived: "",
            monthsLived: "",
            daysLived: "",
        }
    }


    inputChange(e) {
        const name = e.target.name;
        this.setState({
            [name]: e.target.value
        });
    }

    submitForm(e) {
        e.preventDefault();
        let message;
        console.log(this.state);
        if ((this.state.birth !== "") & (this.state.death !== "")) {
            const death = moment(this.state.death);
            const birth = moment(this.state.birth);
            const yearsLived = death.diff(birth, "years");
            const monthsLived = death
                .subtract(yearsLived, "years")
                .diff(birth, "months");
            const daysLived = death
                .subtract(monthsLived, "months")
                .diff(birth, "days");
            message = `Lived for ${yearsLived} years, ${monthsLived} months, and ${daysLived} days.`;
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
                .add(this.state.daysLived, "days")
                .format("dddd, MMMM Do YYYY");
            message = `Died on ${death}.`;
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
                .subtract(this.state.daysLived, "days")
                .format("dddd, MMMM Do YYYY");
            message = `Born on ${birth}.`;
        }
        this.setState({
            birth: "",
            death: "",
            yearsLived: "",
            monthsLived: "",
            daysLived: ""
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
        )
    }
}
