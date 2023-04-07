import { useParams, Link } from 'react-router-dom'
import { Button, ButtonGroup, Card, CardMedia, CardContent, Typography, CardActions } from '@mui/material';
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

  return (
    <>

      <Card maxWidth="md" maxHeight="s">
        {/* <CardMedia
          component="img"
          image={`https://source.unsplash.com/random?${product.name}`}
          title={product.name}
        /> */}
        <CardContent>
          <Typography gutterBottom variant="h4" component="h2">{product.name}</Typography>
          <Typography>inStock: {product.inStock}</Typography>
          <Typography>Price: ${product.price}</Typography>
        </CardContent>
        <CardActions>
          <ButtonGroup variant="text">
            <Button onClick={() => addItemHandler(product)}>ADD TO CART</Button>
            <Button component={Link} to={'/'}>CLOSE</Button>
          </ButtonGroup>
        </CardActions>
      </Card>

    </>
  )
}

export default ProductDetails;
