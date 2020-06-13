import React, { useState, useEffect } from "react";
import Button from "./Button";
import UserList from "./UserList";
import Spinner from "./Spinner";

function Usres() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isErr, setIsErr] = useState(false);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const apiCall = await fetch("https://randomuser.me/api/?results=5");
      const res = await apiCall.json();
      setData(res.results);
    } catch {
      setIsErr(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  const clickHandle = () => {
    fetchData();
  };

  return (
    <div className="container">
      <Button onClick={clickHandle} />
      {isLoading && <Spinner />}
      {isErr && <p>oops there is error .... SORRY</p>}
      <div className="user-list">
        {!isErr &&
          data.map((user, i) => (
            <UserList
              key={i}
              src={user.picture.medium}
              firstName={user.name.first}
              lastName={user.name.last}
            />
          ))}
      </div>
    </div>
  );
}

export default Usres;
