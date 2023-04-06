import { Button, ButtonGroup } from '@mui/material';
import { set } from "../../store/product";
import { useSelector, useDispatch } from "react-redux";
// import Cart from '../SimpleCart'
// import { Grid } from '@mantine/core';

const Categories = () => {

  const {categories} = useSelector((state) => state.category);
  const dispatch = useDispatch()
  return(
    <>
    {/* <Grid container p={3}>
      <Grid item xs> */}
    <h4>Browse Our Categories</h4>
    <ButtonGroup variant="text">
    {
      categories.map((category, idx) =>(
        <Button onClick={() => dispatch(set(category.name))}>{category.name}</Button>
      ))
    }
    </ButtonGroup>
      {/* </Grid> */}
      {/* <Grid item xs> */}
       {/* <Cart/> */}
      {/* </Grid>
      </Grid> */}
    </>
  )
};

export default Categories;
