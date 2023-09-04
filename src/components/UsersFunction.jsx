import React, { useEffect, useState } from "react";
import axios from "axios";

const UsersFunction = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        // handle success
        console.log("get data successful:", response.data);
        setUsers(response.data);
      })
      .catch((error) => {
        // handle error
        console.log("get data error:", error);
      });
  }, []);
  return (
    <div>
      UsersFunction
      {users.map((user) => (
        <div key={user.id}>
          <ul>
            <li>Name: {user.name}</li>
            <li>Username: {user.username}</li>
            <li>Email: {user.email}</li>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default UsersFunction;
