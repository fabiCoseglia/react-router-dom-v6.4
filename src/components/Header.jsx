import { Container, Nav, Navbar } from 'react-bootstrap'
import {NavLink } from 'react-router-dom'

export const Header = () => {
  return (
    <Navbar expand="lg" bg="dark" data-bs-theme="dark" >
      <Container>
        <NavLink className='navbar-brand text-success'>React Router Dom <b className='text-warning'>V6.4</b></NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink className='nav-link' to={'/'}>Home</NavLink>
            <NavLink className='nav-link' to={'/blog'}>blog</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
