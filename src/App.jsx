import React from 'react'
import { BrowserRouter, Route, Routes, redirect } from 'react-router-dom'
import { ContactUs, Home, Layout, Profile, ProfileEdit } from './pages'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'boxicons'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path='/contact-us' element={<ContactUs/>}></Route>
        <Route path='/profile' element={<Profile/>}></Route>
        <Route path='/profile/edit' element={<ProfileEdit/>}></Route>
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App