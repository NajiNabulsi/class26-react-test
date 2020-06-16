import React from "react";

function UserList({ src, firstName, lastName, onclick }) {
  return (
    <div className="card" onClick={onclick}>
      <img src={src} alt={firstName} />
      <p>
        {firstName} {lastName}
      </p>
    </div>
  );
}

export default UserList;
