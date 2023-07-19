import { Navbar,Nav, Container} from "react-bootstrap"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { FaBagShopping } from "react-icons/fa6";
export default function NavBarPanel() {
    const cartProducts = useSelector(state => state.cart)
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">Shopping App</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link to="/" as={Link}>Products</Nav.Link>
                </Nav>
                <Navbar.Toggle/>
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        <Nav.Link to="/cart" as={Link}> <FaBagShopping/> {cartProducts.length ? cartProducts.length : 0}</Nav.Link>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}