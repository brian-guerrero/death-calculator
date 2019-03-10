import React from "react";

export default function LivedFields(props) {
  return (
    <div className="field-body">
      <div className="field">
        <label htmlFor="years" className="label is-medium">
          Years Lived:
        </label>
        <input
          type="number"
          inputMode="numeric"
          pattern="[0-9]*"
          name="years"
          id="yearsLived"
          value={props.lived.years}
          onChange={props.onChange}
          className="input"
          min="0"
        />
      </div>
      <div className="field">
        <label htmlFor="months" className="label is-medium">
          Months Lived:
        </label>
        <input
          type="number"
          inputMode="numeric"
          pattern="[0-9]*"
          name="months"
          id="monthsLived"
          value={props.lived.months}
          onChange={props.onChange}
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
          inputMode="numeric"
          pattern="[0-9]*"
          name="days"
          id="daysLived"
          value={props.lived.days}
          onChange={props.onChange}
          className="input"
          min="0"
          max="31"
        />
      </div>
    </div>
  );
}
