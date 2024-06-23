import React from 'react'
import { Navegacion } from '../components/Navegacion'
import { VideoBaner } from '../components/VideoBaner'
import { Button } from 'react-bootstrap'
import { Footer } from '../components/Footer'

export const Principal = () => {
  return (
    <>
    <Navegacion/>
    <VideoBaner/>
    <div className='d-flex justify-content-center mb-5 '>

    <Button className='boton' variant="primary" href="/contacto" >Contacto</Button>
    </div>
    <Footer/>
    </>
    
  )
}
