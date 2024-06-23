import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Principal } from '../pages/Principal'
import { Contacto } from '../pages/Contacto'
import { Nosotros } from '../pages/Nosotros'
import { Servicios } from '../pages/Servicios'

export const AppRouter = () => {
  return (
    <>
    <BrowserRouter  >
    <Routes>

        <Route path='/' element={<Principal/>}/>
        <Route path="/contacto" element={<Contacto/>}/>
        <Route path="/nosotros" element={<Nosotros/>}/>
        <Route path="/servicios" element={<Servicios/>}/>

    </Routes>
      
    </BrowserRouter>
    </>
  )
}
