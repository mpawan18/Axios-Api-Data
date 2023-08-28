import React, { useState } from 'react';
import axios from 'axios';
const PostAxois = () => {
    const [mytitle, setMyTitle] =useState('');
    const [ mybody, setMyBody]  =useState('');

    const handleSubmit =(e)=>{
      e.preventDefault();
      axios.post("https://jsonplaceholder.typicode.com/posts",{
        title: mytitle,
        body : mybody
      })
      .then((response)=>{
        console.log(response);
      })
      .catch((error)=>{
        console.log(error);
      })
    }

  return (
    <>
    <form  onSubmit={handleSubmit} className='App'> 
         <label>  Enter Title:</label>
        <input type='text' name='title' value={mytitle} onChange={(e )=>setMyTitle(e.target.value)}/>
          <br/>
        <label>  Enter body:</label>
        <input type='text' name='body' value={mybody}  onChange={(e )=>setMyBody(e.target.value)}/> 
        <br/>
        <input type='submit' name='Post'/> 

    </form>
    </>
  )
}

export default PostAxois;