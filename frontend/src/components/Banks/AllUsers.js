import React from "react";
import Card from "./Card";

const AllUsers = () => {
  const users = [{ id: "1231", name: "naman" }];

  return (
    <div>
      <h2>AllUsers</h2>
      <Card />
    </div>
  );
};

export default AllUsers;
