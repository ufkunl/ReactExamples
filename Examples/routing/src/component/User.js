import axios from 'axios';
import {React, useState, useEffect} from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom';

function User() {

    let {id} = useParams();

    const [user,setUser] = useState({title: "", body: ""});
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        axios(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((res)=> setUser(res.data))
        .catch((e)=> console.log(e))
        .finally(()=>setIsLoading(false));
    },[id])
    

    return (
        <div>
            <h1>User Detail</h1>
            <br/>
            <div>{isLoading && "Loading..."}</div>
            <div hidden={isLoading}>
                <p><b>Title: </b>{user.title}</p>
                <p><b>Body:</b>{user.body}</p>
                <Link to={`/user/${parseInt(user.id)+1}`}>
                    Next User({parseInt(id)+1})
                </Link>
            </div>
        </div>
    )
}

export default User;
