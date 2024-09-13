import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Bank from './components/Bank'
import CreditCardPage from './components/CreditCardPage'
import Navbar from './components/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css'
import Register from './components/Register'


function App() {
  return <>
    
  <BrowserRouter>
  <Navbar/>
    <Routes>
      <Route path='/' element={<Bank/>}/>
      <Route path='/credit-card-page' element={<CreditCardPage/>}/>
      <Route path='/create' element={<Register/>}/>
    </Routes>
  </BrowserRouter>
  </>
}

export default App;