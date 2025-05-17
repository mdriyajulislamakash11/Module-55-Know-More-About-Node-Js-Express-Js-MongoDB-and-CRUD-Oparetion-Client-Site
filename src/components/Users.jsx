import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Users = () => {
    const data = useLoaderData()
    console.log(data)


    return (
        <div>
            <h2>users: {data.length}</h2>
            {
                data.map((user) => <p key={user._id}> {user.name} {user.email}</p> )
            }
        </div>
    );
};

export default Users;