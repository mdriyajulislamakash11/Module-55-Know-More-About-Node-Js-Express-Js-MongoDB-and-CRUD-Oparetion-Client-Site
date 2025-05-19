import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";

const Update = () => {
  const navigate = useNavigate()
  const navigate2 = useNavigate()
  const lodedUsers = useLoaderData();
  const { _id, name, email } = lodedUsers || {};

  const handleUpdateUser = (e) => {
    e.preventDefault();

    const form = e.target;

    const name = form.name.value;
    const email = form.email.value;
    const updatedUser = {name, email}

    console.log(updatedUser);

    fetch(`http://localhost:5000/users/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedUser)
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        navigate2("/users")
        form.reset()
      });
  };

  return (
    <div>
      <h2>Update User Information: {name}</h2>

      <form action="" onSubmit={handleUpdateUser}>
        <input type="text" name="name" defaultValue={name} />
        <br />
        <input type="email" name="email" defaultValue={email} />
        <br />
        <button type="submit">Update</button>
      </form>

      <button onClick={() => navigate("/users")}>Users</button>
    </div>
  );
};

export default Update;
