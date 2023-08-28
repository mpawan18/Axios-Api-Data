
import axios from 'axios';
import  { useState , useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Edit = () => {
    const [id , setId]  = useState(0);
    const [name , setName]  = useState('');
    const [age , setAge]  = useState('');
    const [email , setEmail]  = useState('');

    const navigate = useNavigate()

    useEffect(() => {
       setId(localStorage.getItem('id'));
       setName(localStorage.getItem('name'));
       setEmail(localStorage.getItem('email'));
       setAge(localStorage.getItem('age'))
    }, [])
    

    const handleUpdate=(e)=>{
        e.preventDefault();
        axios.put(`https://64e32199bac46e480e783a44.mockapi.io/CRUD/${id}`,{
            e_name: name,
            e_age: age,
            e_email: email
        }).then(()=>{
            navigate('/')
        }).catch((error)=>{
            console.log(error)
        });
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
                <h1>Update-Data</h1></div>
            <form onSubmit={handleUpdate} >
                <div className='form-group'>
                    <label> ENTER NAME :</label>
                    <input type='text' value={name} onChange={(e)=>setName(e.target.value)} placeholder='write your name' className=' form-controle'  />
                </div>


                <div className='form-group'>
                    <label> AGE :</label>
                    <input type='text' value={age}   onChange={(e)=>setAge(e.target.value)} placeholder='write your age' className=' form-controle'  />
                </div>

                <div className='form-group'>
                    <label> ENTER EMAIL :</label>
                    <input type='text' value={email}  onChange={(e)=>setEmail(e.target.value)}  placeholder='write your email' className=' form-controle'  />
                </div>
                <br />

                <div className='d-grid'>
                    <input type='submit' value='Update' className='btn btn-primary' /></div>
            </form>
            

        </div>
    </div>

</>
  )
}

export default Edit