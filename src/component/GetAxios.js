import React, { useState, useEffect}from "react";
import axios  from "axios";

const  baseURL =  " https://jsonplaceholder.typicode.com/posts"

const GetAxios = () => {

  const[ Mydata , setMyData] =useState([]);



  useEffect(()=>{
    axios.get(baseURL).then((response)=>{
    setMyData(response.data);
    
  })
   } , []);
  return (
    <>
    { 
      Mydata.map((item)=>{
        
        return(
          <div className='App' >
            <h1>{item.id} </h1>
          <h2> {item.title}</h2>
          <h3> {item.body} </h3>

          </div>
          
        )
      })

    }
    
    </>
  )
}

export default GetAxios;