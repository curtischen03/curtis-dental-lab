import { Nav, Navbar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';


function CustomNavbar() {
  return (
    <Navbar bg='info' variant='dark' sticky='top' expand="lg" collapseOnSelect style={{ height: '64px' }}>
      <Navbar.Brand className='d-flex align-items-center'>
        <img src={`${process.env.PUBLIC_URL}/imgs/dental/file.png`} width='40px' height='40px' style={{ marginLeft: '10px', marginRight: '10px' }} alt="Logo" />
        <a href={process.env.NODE_ENV === 'production' 
            ? 'https://curtischen03.github.io/curtis-dental-lab/#home' 
            : '/#home'} 
          className='logo'
        >          
          Curtis Dental Lab Inc.
        </a>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse style={{ backgroundColor: '#0dcaf0' }}>
        <Nav>
        <Nav.Link as={Link} to={process.env.NODE_ENV === 'production' 
          ? "/curtis-dental-lab/#products" 
          : "/#products"}>
          Products
        </Nav.Link>
        <Nav.Link as={Link} to={process.env.NODE_ENV === 'production' 
          ? "/curtis-dental-lab/#about-us" 
          : "/#about-us"}>
          About Us
        </Nav.Link>
        <Nav.Link as={Link} to={process.env.NODE_ENV === 'production' 
          ? "/curtis-dental-lab/#contact-us" 
          : "/#contact-us"}>
          Contact Us
        </Nav.Link>
          <LinkContainer to="/passwordPage">
            <Nav.Link>Pricing</Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default CustomNavbar;
