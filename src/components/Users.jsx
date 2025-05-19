import { useState } from "react";
import { Link, useLoaderData, useNavigate } from "react-router-dom";

const Users = () => {
  const navigate = useNavigate();
  const loadedUser = useLoaderData();
  const [users, setUsers] = useState(loadedUser);

  const handleDelete = (_id) => {
    console.log(_id);

    fetch(`http://localhost:5000/users/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          alert("user deleted successfully");

          const remining = users.filter((user) => user._id !== _id);
          setUsers(remining);
        }
      });
  };

  return (
    <div>
      <h2>users: {users.length}</h2>
      {users.map((user) => (
        <p key={user._id}>
          {user.name} {user.email}{" "}
          <Link to={`/update/${user._id}`}>
            <button>Update</button>
          </Link>
          <button onClick={() => handleDelete(user._id)}>X</button>
        </p>
      ))}

      <button onClick={() => navigate("/")}>Home</button>
    </div>
  );
};

export default Users;
