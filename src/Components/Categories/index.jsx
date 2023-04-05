import { Button, ButtonGroup } from '@mui/material';
import { set } from "../../store/categories/index";
import { useSelector, useDispatch } from "react-redux";

const Categories = () => {

  const {categories} = useSelector((state) => state.category);
  const dispatch = useDispatch()
  return(
    <>
    <h4>Browse Our Categories</h4>
    <ButtonGroup variant="text">
    {
      categories.map((category, idx) =>(
        <Button onClick={() => dispatch(set(category.name))}>{category.name}</Button>
      ))
    }
    </ButtonGroup>
    </>
  )
};

export default Categories;
