import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Read = () => {

    const [apidata, setApiData] = useState([]);

    function getData() {
        axios.get('https://64e32199bac46e480e783a44.mockapi.io/CRUD')
            .then((response) => {
                setApiData(response.data)
            })
    }

    useEffect(() => {
        getData();

    }, [])

    function handleDelete(id){
        axios.delete(`https://64e32199bac46e480e783a44.mockapi.io/CRUD/${id}`)
        .then(()=>{
            getData();
        }) .catch((error)=>{
            console.log(error)
        });
    }

    function setDataToStorage(id,name,age,email){
        localStorage.setItem('id', id);
        localStorage.setItem('name', name);
        localStorage.setItem('email', email);
        localStorage.setItem('age', age)
    }

    return (
        <>
            <div className='row'>
                <div className=' col-md-12'>
                    <div className=' mb-2 mt-2'> 
                    <Link to ='Create'>
                    <button className='btn btn-primary'>  Create New Data</button>
                    </Link> 
                    </div>

                    
                    <table className='table table-borderd table-striped table-dark table-hover'>
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th> Email</th>
                                <th> Age </th>
                                <th> Edit</th>
                                <th> Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                apidata.map((item) => {
                                    return (
                                        <>
                                            <tr>
                                                <td> {item.id}</td>
                                                <td> {item.e_name}</td>
                                                <td> {item.e_email}</td>
                                                <td> {item.e_age}</td>
                                                <td>
                                                    <Link to= '/edit'>
                                                    <button className='btn btn-primary' onClick={()=> setDataToStorage(item.id,item.e_name, item.e_email, item.e_age)}> Edit</button>
                                                    </Link>                                            
                                                </td>
                                                <td>
                                                    <button className='btn btn-danger' onClick={()=> {if (window.confirm ('Are u Sure ??')) {handleDelete(item.id)}} }> Delete </button>
                                                </td>
                                            </tr>


                                        </>
                                    )

                                })



                            }
                        </tbody>
                    </table>


                </div>
            </div>



        </>
    )
}

export default Read