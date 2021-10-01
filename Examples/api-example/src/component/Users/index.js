import {React, useEffect, useState} from 'react'
import  axios  from "axios";

function Users() {

    const [users, setUsers] = useState([]);

    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        axios('https://jsonplaceholder.typicode.com/users')
        .then(res => {
            setUsers(res.data)
        })
        .catch((e)=>console.log(e))
        .finally(()=>{
            setLoading(false);
        });
    },[users]);

    return (
        <div>
            <h1>Users</h1>
            <br/>
            <div>{isLoading && "Loading..."}</div>
            {
                users.map(user => (
                    <div>{user.name}</div>
                ))
            }
        </div>
    )
}

export default Users;
