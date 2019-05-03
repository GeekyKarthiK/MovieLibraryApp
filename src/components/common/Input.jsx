import React from "react";

export default function Input({ name, label, onChange, value, id, error }) {
  return (
    <div class="form-group">
      <label for={id}>{label}:</label>
      <input
        autoFocus
        onChange={onChange}
        type={name}
        value={value}
        name={name}
        class="form-control"
        id={id}
      />
      {error && <div className={"alert alert-danger"}>{error}</div>}
    </div>
  );
}
