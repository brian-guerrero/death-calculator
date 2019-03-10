import React from "react";

export default function BirthField(props) {
  return (
    <div className="field">
      <label htmlFor="birth" className="label is-medium">
        Born:
      </label>
      <input
        type="date"
        name="birth"
        id="birth"
        max={props.death}
        value={props.birth}
        onChange={props.onChange}
        className="input"
      />
    </div>
  );
}
