import React from 'react'
import { Link } from 'react-router-dom'

function Bank() {
  return <>
  <h1>Welcome Bank</h1>
  <h3>Click Here to <Link to={'/create'}>Register</Link></h3>
  </>
}

export default Bank