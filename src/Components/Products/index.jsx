import { Card } from "@mantine/core";
import { Button, ButtonGroup } from '@mui/material';
import { Add } from "../../store/cart";
import { useDispatch, useSelector } from "react-redux";

const Products = () => {

  const {activeCategory} = useSelector((state) => state.category);
  const {products} = useSelector((state) => state);
  console.log(products);

  const dispatch = useDispatch();

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
            <Button onClick={() => dispatch(Add(product))}>ADD TO CART</Button>
            <Button>VEIW DETAILS</Button>
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