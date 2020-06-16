import React from "react";

function Card({ src, firstName, lastName, email, phone, state, country }) {
  return (
    <div className="info">
      <img src={src} alt="user" />

      <h1>
        {firstName} {lastName}
      </h1>

      <h2>{email}</h2>
      <h2>{phone}</h2>
      <h2>
        {state}, {country}
      </h2>
    </div>
  );
}

export default Card;
