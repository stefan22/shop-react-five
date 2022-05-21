import React from "react";
import { Link } from "react-router-dom";


const users = [
  {
    name: `Param`
  },
  {
    name: `Vennila`
  },
  {
    name: `Afrin`
  }
];

const UsersPage = () => {
  return (
    <>
      {users.map((user, index) => (
        <h5 key={index}>
          <Link to={`/user/${index + 1}`}>{user.name}'s Page</Link>
        </h5>
      ))}
    </>
  );
};

export default UsersPage