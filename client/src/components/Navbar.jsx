import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

function Navbar() {
  return <>
  <nav className="navbar">
      <div className="logo">
        <h4>Logo</h4>
      </div>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" />
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
      <ul className="nav-links">
        <li><Link to={'/credit-card-page'}>Credit Cards</Link></li>
        <li><Link to={'/'}>Bank</Link></li>
      </ul>
    </nav>
  </>
}

export default Navbar