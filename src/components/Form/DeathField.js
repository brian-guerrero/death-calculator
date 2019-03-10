import React from "react";

export default function DeathField(props) {
  return (
    <div className="field">
      <label htmlFor="died" className="label is-medium">
        Died:
      </label>
      <input
        type="date"
        name="death"
        id="death"
        min={props.birth}
        value={props.death}
        onChange={props.onChange}
        className="input"
      />
    </div>
  );
}
