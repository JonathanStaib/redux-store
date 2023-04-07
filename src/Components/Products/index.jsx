import { Card } from "@mantine/core";
import { Button, ButtonGroup } from '@mui/material';
import { Add } from "../../store/cart";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { adjustInventory } from "../../store/product";

const Products = () => {

  const {activeCategory} = useSelector((state) => state.category);
  const {products} = useSelector((state) => state);
  console.log(products);

  const dispatch = useDispatch();

  const addItemHandler = (product) => {
    dispatch(Add(product));
    dispatch(adjustInventory(product));
  }

  return(
    <>
    {
      activeCategory && <h2>{activeCategory}</h2>
    }
    <ButtonGroup variant="text">
      {
        activeCategory && products.map((product, idx) =>(
          <Card key={`products-${idx}`}>
            <h4>{product.name}</h4>
            <p>{product.description}</p>
            <Button onClick={() => addItemHandler(product)}>ADD TO CART</Button>
            <Button component={Link} to={`product/${product._id}`}>VEIW DETAILS</Button>
            {console.log(product._id)}
          </Card>

        ))
      }
    </ButtonGroup>
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