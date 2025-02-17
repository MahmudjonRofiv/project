import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import Home from '../Home';
import Features from '../Features';


function Header() {
  return (
    <>
      <Router>
        <Navbar bg="dark" data-bs-theme="dark">
          <Container>
          
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/">home</Nav.Link>

              <Nav.Link href="/features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Features' element={<Features />} />
        </Routes>
      </Router>
    </>
  )
}

export default Header