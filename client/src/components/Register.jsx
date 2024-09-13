import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Register() {

    const [name,setName] = useState()
    const [bankname,setBankname] = useState()
    const navigate = useNavigate()

    const Submit = async(e)=>{
        e.preventDefault()
        try {
            const res = await axios.post('http://localhost:8000/create',{name,bankname})
            .then(res=> navigate('/credit-card-page'))
        } catch (error) {
            console.log(error)
        }
    }

  return <>
  <div className=' d-flex justify-content-center align-items-center'>
  <div className='w-50 bg-white rounded p-3 '>
    <h3>Enter Details</h3>
    <form onSubmit={Submit}>
        <div className="mb-3">
            <label className="form-label">Bank Name</label>
            <input type="text" className="form-control" onChange={(e)=> setBankname(e.target.value)}/>
            
        </div>
        <div className="mb-3">
            <label className="form-label">User Name</label>
            <input type="text" className="form-control" onChange={(e)=> setName(e.target.value)}/>
            
        </div>
        
        
        <button type="submit" className="btn btn-primary">Submit</button>
    </form>
    </div>
    </div>
  </>
}

export default Register