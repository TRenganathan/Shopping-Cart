import { Navbar,Nav, Container} from "react-bootstrap"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { FaBagShopping } from "react-icons/fa6";
export default function NavBarPanel() {
    const cart = useSelector(state => state.cart)
    return (
        <Container>
            <header>
                
                <Navbar expand="lg">
                    <Container>
                        <Navbar.Brand href="/">Shopping App</Navbar.Brand>
                        
                        <Navbar.Toggle/>
                        <Navbar.Collapse className="justify">
                        <Nav className="mr-auto">
                            <Nav.Link to="/" as={Link}>Products</Nav.Link>
                        </Nav>
                            <Navbar.Text>
                                <Nav.Link to="/cart" as={Link}> <FaBagShopping/> {cart.length ? cart.length : 0 } </Nav.Link>
                            </Navbar.Text>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </header>
        </Container>
    )
}
// {cart.length ? cart.length : 0}