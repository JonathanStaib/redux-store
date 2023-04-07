import { Button, ButtonGroup } from '@mui/material';
import { get, select } from "../../store/product";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from 'react';
// import Cart from '../SimpleCart'
// import { Grid } from '@mantine/core';

const Categories = () => {

  const {categories} = useSelector((state) => state.category);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(get('categories'))
    dispatch(get('products'))
  }, []);

  return(
    <>
    {/* <Grid container p={3}>
      <Grid item xs> */}
    <h4>Browse Our Categories</h4>
    <ButtonGroup variant="text">
    {
      categories.map((category, idx) =>(
        <Button onClick={() => dispatch(select(category.name))}>{category.name}</Button>
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
