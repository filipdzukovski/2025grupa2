import React,{useState,useEffect} from 'react';
import {useParams,useNavigate} from 'react-router';
import axios from 'axios'

export const CommentDetails = () =>{
    const [details,setDetails] = useState({});
    const [edit,setEdit] = useState(false);
    const [editObject,setEditObject] = useState({name:'',email:'',body:''})
    
    let {commentId} = useParams();
    const navigate = useNavigate();
    function handleEdit(){
        setEdit(true);
        setEditObject(details);
    }

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/comments/' + commentId)
        .then(res=>setDetails(res.data))
        .catch(err=>alert(err))
    },[])

    async function updateItem(){
        const updatedComment={
            ...details, //id,postId
            body: editObject.body,
            email:editObject.email,
            name:editObject.name
        }

        const result = await axios.put(`https://jsonplaceholder.typicode.com/comments/${commentId}`,updatedComment);
         if(result.status === 200){
            alert("Comment updated successfully");
            navigate('/comments')
         }
         else{
            alert("Comment failed to update")
         }
    }

    return(
        <div id='comment-details'>
           {edit ? 
           <>
            <input
                type='text'
                value={editObject.name}
                onChange={(e)=>{setEditObject({...editObject,name:e.target.value})}}
            />
            <br/>
            <br/>
            </>
           : <h2>{details.name}</h2>}
            {edit ? <> <input 
                    type='text'
                    value={editObject.email}
                    onChange={(e)=>{setEditObject({...editObject,email:e.target.value})}}

            />
            <br/>
            <br/>

            </>
                :<h3>{details.email}</h3>}
            {edit ? 
            <>
            <textarea
            rows={10}
            cols={30}
            value={editObject.body}
            onChange={(e)=>{setEditObject({...editObject,body:e.target.value})}}
            />
            <br/>
            <br/>
                <button onClick={()=>{updateItem()}}>Save</button>
                <button onClick={()=>{setEdit(false); setEditObject({name:"",email:"",body:""})}}>Cancel</button>
            </>
             : <p>{details.body}</p>}

          {edit === false &&  <button onClick={handleEdit}>Edit</button>}
        </div>
    )
}