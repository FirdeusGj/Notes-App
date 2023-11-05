import React from "react";
import "./Button.css";

export default function Button({ name, width, height }) {
  return (
    <button
      className="button"
      style={{
        width: width || "100%",
        height: height || "30px",
      }}
    >
      {name}
    </button>
  );
}
