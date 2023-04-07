import { useParams, Link } from 'react-router-dom'
import { Card, Button, ButtonGroup } from '@mui/material';
import { Add } from "../../store/cart";
import { useDispatch, useSelector } from "react-redux";
import { adjustInventory } from "../../store/product";

const ProductDetails = () => {

  const { products } = useSelector((state) => state);
  const { id } = useParams();
  console.log(id);
  
  const dispatch = useDispatch();
  
  const addItemHandler = (product) => {
    dispatch(Add(product));
    dispatch(adjustInventory(product));
  }
  
  const product = products.find(product => product._id === id);
  console.log(product);

  return(
    <>
      <Card >
        <h4>{product.name}</h4>
        <p>In Stock: {product.inStock}</p>
        <p>Price: ${product.price}</p>
        <ButtonGroup variant="text">
          <Button onClick={() => addItemHandler(product)}>ADD TO CART</Button>
          <Button component={Link} to={'/'}>Close</Button>
        </ButtonGroup>
      </Card>

    </>
  )
}

export default ProductDetails;
