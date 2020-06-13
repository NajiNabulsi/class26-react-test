import React from "react";

function Button({ onClick }) {
  return (
    <div className="button">
      <button onClick={onClick}>Click Me for new users</button>
    </div>
  );
}

export default Button;
