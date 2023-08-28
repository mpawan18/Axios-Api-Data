import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Create = () => {

    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [email, setEmail] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('https://64e32199bac46e480e783a44.mockapi.io/CRUD', {
            e_name: name,
            e_age: age,
            e_email: email
        }).then(() => {
            navigate('/');
        })
    }
    return (
        <>
            <div className='row '>
                <div className=' col-md-4'>
                    <div className=' mb-2 mt-2'>
                        <Link to='/'>
                            <button className='btn btn-success'> Read Data</button>
                        </Link>
                    </div>

                    <div className='bg-primary p-4 text-center'>
                        <h1>Create-Data</h1></div>
                    <form onSubmit={handleSubmit}>
                        <div className='form-group'>
                            <label> ENTER NAME :</label>
                            <input type='text' placeholder='write your name' className=' form-controle' onChange={(e) => setName(e.target.value)} />
                        </div>


                        <div className='form-group'>
                            <label> AGE :</label>
                            <input type='text' placeholder='write your age' className=' form-controle' onChange={(e) => setAge(e.target.value)} />
                        </div>

                        <div className='form-group'>
                            <label> ENTER EMAIL :</label>
                            <input type='text' placeholder='write your email' className=' form-controle' onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <br />

                        <div className='d-grid'>
                            <input type='submit' value='submit' className='btn btn-primary' /></div>



                    </form>
                    {name}
                    <br />
                    {age}
                    <br />
                    {email}

                </div>
            </div>

        </>
    )
}

export default Create