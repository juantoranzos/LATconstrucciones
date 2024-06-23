import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import logo from '../img/logoLAT.png'
import { Link } from 'react-router-dom'


export const Navegacion = () => {
  return (
    <>
       
      <Container className='contenedor w-100'>
        <Navbar expand="lg">
          <Navbar.Brand as={Link} to='/' ><img src={logo} alt="Lat" className='img-fluid rounded-circle logo' /></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end navbar m-2 text-center">
            <Nav>
              <Nav.Link as={Link} to="/contacto" className='px-4'>
                Contacto
              </Nav.Link>
              <Nav.Link as={Link} to='/servicios' className='px-4'>
                Servicios
              </Nav.Link>
              <Nav.Link as={Link} to='/nosotros' className='px-4'>
                Nosotros
              </Nav.Link>

            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    


    </>
  )
}
