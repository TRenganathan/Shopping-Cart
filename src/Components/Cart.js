import { useDispatch, useSelector } from "react-redux"
import {Card,Button,Container} from 'react-bootstrap'
import { Remove } from "../Store/CartSlice"

export default function Cart() {
    const cart = useSelector((state)=>state.cart)

    const dispatch = useDispatch()
    const RemoveCart = (prod) => {
        dispatch(Remove(prod))
    }
    const cartProducts = cart.map((prod)=> {
        return (
        <div className="col-md-3" style={{marginBottom:20}} key={prod.product.id}>
            <Card className="h-100" >
                <Card.Img variant="top" src={prod.product.image} />
                <Card.Body>
                    <Card.Title><h6>{prod.product.title}</h6></Card.Title>
                    <Card.Text>
                        {prod.product.price}
                    </Card.Text>
                </Card.Body>
                <Card.Footer style={{background:'white'}}>
                    <Button  variant="danger" onClick={(id)=> RemoveCart(prod.product.id)}>Remove From Cart </Button>
                </Card.Footer>
            </Card>
        </div>
        )
    })
    
    return (
        <div className="products">
            <Container>
                <div className="row">
                    {cartProducts}
                </div>
            </Container>
        </div>
    )
}