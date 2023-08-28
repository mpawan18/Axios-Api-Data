
import './App.css';
import React from 'react'
import Create from './component/Create';
import {  Routes, Route } from 'react-router-dom';
import Read from './component/Read';
import Edit from './component/Edit';
// import GetAxios from './component/GetAxios';
// import PostAxois from './component/PostAxios';

const App = () => {
  return (
    <div className='container'>
      <Routes>
        
        <Route path='/' element={<Read/>} />
        <Route exact path='/Create' element ={<Create/>} />
        <Route exact path='/edit' element={ <Edit/>} />

      </Routes>

      {/* <GetAxios/> */}
      {/* <PostAxois/> */}


    </div>
  )
}

export default App



