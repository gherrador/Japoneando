import './Navbar.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { CartWidget } from '../'
import logo from '../../../assets/images/logo.jpg'
import { LoginContainer } from '../../'
import MediaQuery from 'react-responsive'
import { useSelector } from 'react-redux';

export const NavBar = () => {
  const User = useSelector(state => state.user.User)
  const cartList = useSelector(state => state.cart.products)
  return (
    <Navbar id='navBar' variant="dark" expand="lg">
      <MediaQuery minWidth={991}>
        <Container>
          <Link to={'/'} id="brandNav" href="#home"><img alt="" id="brand" src={logo} />Japoneando</Link>
          <Nav id='menuContainer'>
            {User.admin && <Link to={'/admin'} className='selected' href="#link">Admin Panel</Link>}
            <Link to={'/'} className='selected' href="#link">Products</Link>
            <NavDropdown className='selector' title="Categories" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to={'/category/Ornament'}>Ornaments</NavDropdown.Item>
              <NavDropdown.Item as={Link} to={'/category/Kitchen'}>Kitchen utensils</NavDropdown.Item>
              <NavDropdown.Item as={Link} to={'/category/Food'}>Food</NavDropdown.Item>
              <NavDropdown.Item as={Link} to={'/category/Drink'}>Drink</NavDropdown.Item>
              <NavDropdown.Item as={Link} to={'/category/Dessert'}>Desserts</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Container>
        <>
          <LoginContainer />
        </>
        {User.username && <div className='userShop'><Link to={'/orders'} className='selected' href="#link">My orders</Link></div>}
        {cartList.length ? <div className='countCart' >{cartList.reduce((acumQty, { Qty }) => acumQty + Qty, 0)}</div>:false}
        <div id='cartShop'>
          <Link to={'/cart'}><CartWidget /></Link>
        </div>
      </MediaQuery>
      < MediaQuery minWidth={200} maxWidth={991} >
        <Container fluid>
          <Link to={'/'} id="brandNav" href="#home"><img alt="" id="brand" src={logo} />Japoneando</Link>
          <div className='userContainer'>
            <LoginContainer />
            {User && <div className='userShop'><Link to={'/orders'} className='selected' href="#link">My orders</Link></div>}
            {cartList.length ? <div className='countCart' >{cartList.reduce((acumQty, { Qty }) => acumQty + Qty, 0)}</div>:false}
            <Link to={'/cart'}><CartWidget /></Link>
          </div>
        </Container>
        <Container fluid id="routeContainer">
          <Link to={'/'} className='selected' href="#link">Products</Link>
          <Link to={'/category/Ornament'} className='selected'>Ornaments</Link>
          <Link to={'/category/Kitchen'} className='selected'>Kitchen</Link>
          <Link to={'/category/Food'} className='selected'>Food</Link>
          <Link to={'/category/Drink'} className='selected'>Drink</Link>
          <Link to={'/category/Dessert'} className='selected' >Desserts</Link>
        </Container>
      </MediaQuery >
    </Navbar>
  )
}


