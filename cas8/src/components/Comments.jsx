import React,{useState,useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router';

export const Comments = () =>{

    const [comments,setComments] = useState([]);

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/comments')
            .then(res=>setComments(res.data))
            .catch(err=> alert(err.message))

            // fetch('https://jsonplaceholder.typicode.com/comments')
            // .then(res=>console.log(res))
            // .then(json=>console.log(json))
            // .catch(err=>alert(err))
    },[])

    async function deleteItem(id){
        const deletedItem = await axios.delete('https://jsonplaceholder.typicode.com/comments/'+id);
        alert(deletedItem.status)
        setComments([...comments.filter(comm=>comm.id !== id)])
    }

    return(

        <div id='comments'>

            <table border={1}>
                <thead>
                    <tr>
                        <th>PostId</th>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Body</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {comments.map(comm=>{
                        return(
                            <tr key={comm.id}>
                                <td>
                                    {comm.postId}
                                </td>
                                <td>
                                    {comm.id}
                                </td>
                                <td>
                                    {comm.name}
                                </td>
                                <td>
                                    {comm.email}
                                </td>
                                <td>
                                    {comm.body.substring(0,100)}... <Link to={`/comment/${comm.id}`}>More</Link>
                                </td>
                                <td><button onClick={()=>{deleteItem(comm.id)}}>Delete</button></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}