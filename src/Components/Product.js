import { useEffect } from "react"
import { Card,Button, Container } from "react-bootstrap"
import '../App.css';
import { useDispatch, useSelector } from "react-redux";
import { Add } from "../Store/CartSlice";
import { fetchContent } from "../Store/ProductSlice";

export default function Product() {
    const dispatch = useDispatch()

    useEffect(() => {
      dispatch(fetchContent())
    }, [])
  
    const {contents,isLoading,error} = useSelector((state) => state.content)
    const isCart = useSelector((state)=> state.cart)
    console.log(isCart)
    if (isLoading) {
      return 'loading...'
    }
  
    if (error) {
      return error
    }
    
    const addToCard = (product) => {
        dispatch(Add({product}))
    }
    
    const cards = contents.map((product)=> {
        return (
        <div className="col-md-3" style={{marginBottom:20}} key={product.id}>
            <Card className="h-100" >
                <Card.Img variant="top" src={product.image} />
                <Card.Body>
                    <Card.Title><h6>{product.title}</h6></Card.Title>
                    <Card.Text>
                        {product.price}
                    </Card.Text>
                </Card.Body>
                <Card.Footer style={{background:'white'}}>
                    <Button  variant="primary" onClick={()=> addToCard(product)}>Add To Cart</Button>
                </Card.Footer>
            </Card>
        </div>
        )
    })
    return (
        <div className="products">
            <Container>
                <h2>Product Dashboard</h2>
                <div className="row">
                   {cards}
                </div>
            </Container>
        </div>
    )
}