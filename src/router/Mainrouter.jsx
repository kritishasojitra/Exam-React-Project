import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from '../Pages/Home'
import Form from '../Pages/Form'
import ProductTable from '../Pages/ProductTable'


const Mainrouter = () => {
  return (
    <>
    <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/form" element={<Form/>}></Route>
        <Route path="/table" element={<ProductTable/>}></Route>
    </Routes>
    </>
  )
}

export default Mainrouter