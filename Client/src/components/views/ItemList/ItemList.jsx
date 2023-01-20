import {  Row, Card, Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import './ItemList.css'


export const ItemList = ({ products }) => {
    return (
        <div className="productsCard">
            {products.map(product =>
                <div key={product._id} className='card' id="cardItems">
                    <Row xs={1} md={3} className="g-3" id="cardContainer">                       
                            <Card border='light' id="Card" >
                                <Card.Img className='photo' variant="top" src={product.photo} />
                                <Card.Body>
                                    <Card.Title>{product.name}</Card.Title>
                                    <Card.Text id='productPrice'>
                                        {`Price: ¥ ${product.price}`}
                                    </Card.Text>
                                </Card.Body>
                                <Link to={`/detail/${product._id}`}>
                                    <Button id='btnDetail' variant='primary'>
                                        View Product
                                    </Button>
                                </Link>
                            </Card>
                        
                    </Row>
                </div>)}
        </div>
    )

}

