import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Navbar() {
  return (
    <>
      <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">Sextant</Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default Navbar