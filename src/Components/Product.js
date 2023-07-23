import { useEffect, useState } from "react"
import { Card,Button, Container } from "react-bootstrap"
import '../App.css';
import { useDispatch, useSelector } from "react-redux";
import { Add, Remove } from "../Store/CartSlice";
import { fetchContent } from "../Store/ProductSlice";
export default function Product() {
    const dispatch = useDispatch()

    useEffect(() => {
      dispatch(fetchContent())
    }, [])
    const cart = useSelector((state)=>state.cart)
    const {contents,isLoading,error} = useSelector((state) => state.content)
    const isCart = useSelector((state)=> state.cart)
    const [warning,setWarnig] = useState(false);
    if (isLoading) {
      return 'loading...'
    }
  
    if (error) {
      return error
    }
    const addToCard = (product) => {
        dispatch(Add({product}))
        var isPresent = false
        isCart.map((item)=> {
            
            if(item.product.id === product.id){
                isPresent = true;
            }
            
        })
        if(isPresent){
            setWarnig(true)
            setTimeout(()=>{
                setWarnig(false)
            },2000)
        }
    }
     const Removecart = (prod)=> {
        dispatch(Remove(prod))
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
                    {cart.some(p => p.product.id === product.id) ? (<Button variant="danger" onClick={()=> Removecart(product.id)}>Remove</Button>) : (<Button  variant="primary" onClick={()=> addToCard(product)}>Add To Cart</Button>) }
                </Card.Footer>
            </Card>
        </div>
        )
    })
    return (
        <section>
            <div className="products">
                <Container>
                    <h2>Product Dashboard</h2>
                    <div className="row">
                    {cards}
                    </div>
                </Container>
            </div>
        </section>
    )
}