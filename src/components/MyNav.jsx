import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const MyNav = () => {
  return (
    <Navbar expand="lg" className="bg-warning">
      <Container fluid>
        <Navbar.Brand href="#">EpiBooks!</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#">Home</Nav.Link>
          <Nav.Link href="#">About</Nav.Link>
          <Nav.Link href="#">Browse</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default MyNav;