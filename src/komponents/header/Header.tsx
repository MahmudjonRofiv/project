import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import Home from '../Home';
import Features from '../Features';
import Contackt from '../Contackt';
import About from '../About';
import Sittings from '../Sittings';


function Header() {
  return (
    <>
      <Router>
        <Navbar bg="dark" data-bs-theme="dark">
          <Container>
          
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">home</Nav.Link>
              <Nav.Link as={Link} to="/features">Features</Nav.Link>
              <Nav.Link as={Link} to="/contact">Contackt</Nav.Link>
              <Nav.Link as={Link} to="/about">About</Nav.Link>
              <Nav.Link as={Link} to="/sittings">Sittings</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/features" element={<Features />} />
          <Route path="/contact" element={<Contackt/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/sittings" element={<Sittings/>} />
        </Routes>
      </Router>
    </>
  )
}

export default Header