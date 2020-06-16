import React, { useState, useEffect } from "react";
import Button from "./Button";
import UserList from "./UserList";
import Spinner from "./Spinner";
import Card from "./Card";

function Usres() {
  const [user, setUser] = useState(0);
  const [userListItem, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isErr, setIsErr] = useState(false);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("https://randomuser.me/api/?results=5");
      const res = await response.json();
      setData(res.results);
    } catch {
      setIsErr(true);
    } finally {
      setIsLoading(false);
    }
  };

  const dataHandle = () => {
    fetchData();
  };

  const getUser = (i) => {
    setUser(i);
  };

  return (
    <div className="container">
      <Button onClick={dataHandle} />
      {isLoading && <Spinner />}
      {isErr && <p>oops there is error .... SORRY</p>}
      <div className="user-list">
        {!isErr &&
          userListItem.map((user, i) => (
            <UserList
              onclick={() => getUser(i)}
              key={i}
              src={user.picture.medium}
              firstName={user.name.first}
              lastName={user.name.last}
            />
          ))}
      </div>
      <div>
        {userListItem[user] && (
          <Card
            src={userListItem[user].picture.large}
            firstName={userListItem[user].name.first}
            lastName={userListItem[user].name.last}
            email={userListItem[user].email}
            phone={userListItem[user].phone}
            state={userListItem[user].location.state}
            country={userListItem[user].location.country}
          />
        )}
      </div>
    </div>
  );
}

export default Usres;
