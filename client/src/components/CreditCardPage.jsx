import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

function CreditCardPage() {

    const [users,setUsers] = useState([])

    const id = useParams()

  const getData = async()=>{
    try {
      const result = await axios.get('http://localhost:8000/getusers')
      setUsers(result.data.users)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(()=>{
    getData();
  },[])

  const handleDelete = async(id)=>{
    const isConfirm = window.confirm('Are delete the data?')
    if(isConfirm){
        try {
          await axios.delete('http://localhost:8000/deleteuser/'+id)
          setUsers(users.filter(user => user._id !== id));
        } catch (error) {
          console.log(error)
        }
      }
    }
    

  return <>
  <div>
      <h1>Credit Card Management</h1>
      <table className='table'>
        <thead>
          <tr>
            <th>Id</th>
            <th>Bank</th>
            <th>Name</th>
            <th>Created At</th>
            <th>Enabled</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
        { users.length > 0 ? (
          users.map((e, i) => (
            <tr key={i}>
              <td>{i + 1}</td>
              <td>{e.bankname}</td>
              <td>{e.name}</td>
              <td>{e.createdAt}</td>
              <td>{e.enabled ? 'Yes' : 'No'}</td>
              <td>
                <button onClick={()=> handleDelete(e._id)}>Delete</button>
              </td>
            </tr>
          )) ) : ( <tr>
                    <td colSpan="6">No data available</td>
                  </tr>
                  )}
        </tbody>
      </table>
    </div>
  </>
}

export default CreditCardPage


