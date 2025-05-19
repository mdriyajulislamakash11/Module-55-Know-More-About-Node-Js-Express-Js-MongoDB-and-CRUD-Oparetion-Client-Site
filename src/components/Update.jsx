import React from "react";
import { useLoaderData } from "react-router-dom";

const Update = () => {
  const lodedUsers = useLoaderData();
  const { name, email } = lodedUsers || {};

  const handleUpdateUser = (e) => {
    e.preventDefault();
 
    const form = e.target;

    const name = form.name.value;
    const email = form.email.value;

    console.log(name, email)
    
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
    </div>
  );
};

export default Update;
