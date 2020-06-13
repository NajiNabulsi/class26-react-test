import React from "react";

function UserList({ src, firstName, lastName }) {
  return (
    <div className="card">
      <img src={src} alt="friend" />
      <p>
        {firstName} {lastName}
      </p>
    </div>
  );
}

export default UserList;
