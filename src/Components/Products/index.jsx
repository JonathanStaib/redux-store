import { Button, ButtonGroup, Card, Container, Grid, CardMedia, CardContent, Typography, CardActions } from '@mui/material';
import { Add } from "../../store/cart";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { adjustInventory } from "../../store/product";


const Products = () => {

  const { activeCategory } = useSelector((state) => state.category);
  const { products } = useSelector((state) => state);
  console.log(products);

  const dispatch = useDispatch();

  const addItemHandler = (product) => {
    dispatch(Add(product));
    dispatch(adjustInventory(product));
  }

  return (
    <>
      {
        activeCategory && <h2>{activeCategory}</h2>
      }
      {activeCategory && <Container maxWidth="md" maxHeight="xs">

        <Grid container spacing={4}>
          {products.map((product, idx) => (
            <Grid item key={product.name} xs={12} sm={6} md={4}>

              <Card>
                <CardMedia
                  component="img"
                  image={`https://source.unsplash.com/random?${product.name}`}
                  title={product.name}
                />
                <CardContent>
                  <Typography gutterBottom variant="h4" component="h2">{product.name}</Typography>
                  <Typography>inStock: {product.inStock}</Typography>
                  <Typography>Price: ${product.price}</Typography>
                </CardContent>
                <CardActions>
                  <ButtonGroup variant="text">
                    <Button onClick={() => addItemHandler(product)}>ADD TO CART</Button>
                    <Button component={Link} to={`product/${product._id}`}>VEIW DETAILS</Button>
                  </ButtonGroup>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>

      </Container>}
    </>
  )
}


// const mapStateToProps = ({category}) => {
//   return{
//     activeCategory: category.activeCategory,
//     product: category.products,
//   }
// }

export default Products;