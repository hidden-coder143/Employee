import Recat from 'react'
import {Navbar,Container,Nav} from 'react-bootstrap'

import logo from './media/logo.jpg'

function Navb(){
    return(
        
        <>
  <Navbar bg="primary" variant='dark 18px' >
    <Container>
    <Navbar.Brand href="/"><img
        src={logo}
        width="50"
        height="50"
        className="d-inline-block align-top"
        
      /></Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="/Home">Home</Nav.Link>
      <Nav.Link href="/Employee">Employee</Nav.Link>
      <Nav.Link href="#Dropdown">Dropdown</Nav.Link>
    </Nav>
    <Nav>
      <Nav.Link href="#deets">Sing in</Nav.Link>
      <Nav.Link  href="#memes">
        Loging
      </Nav.Link>
    </Nav>
    </Container>
  </Navbar>
  </>
    )
}
export default Navb;