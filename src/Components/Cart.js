import { useDispatch, useSelector } from "react-redux"
import {Card,Button,Container} from 'react-bootstrap'
import { Remove } from "../Store/CartSlice"
import '../App.css';
import { useRef, useState } from "react";
export default function Cart() {
    const cart = useSelector((state)=>state.cart)
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch()
    const RemoveCart = (prod) => {
        dispatch(Remove(prod))
    }
    
    if (Object.keys(cart).length == 0) {
        return <h2 className="empty"> Your cart is empty</h2>
    }
    const min = 1;
    const max = 100;
   
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
                    
                        <Button  variant="danger" onClick={(id)=> RemoveCart(prod.product.id)}>Remove From Cart</Button>
                    </Card.Footer>
                </Card>
            </div>
        )
    })
    {console.log(cartProducts)}
    return (
        <section>
            <div className="products">
                <Container>
                    <div className="row">
                        {cartProducts}
                    </div>
                </Container>
            </div>
        </section>
    )
}