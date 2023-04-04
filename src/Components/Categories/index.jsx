import { Button } from "@mantine/core";
import { categoryChange } from "../../store/categories";
import { connect } from "react-redux";

const Categories = ({categoryChange, categories}) => {
  return(
    <>
    <h4>Browse Our Categories</h4>
    {
      categories.map((category, idx) =>(
        <Button onClick={() => categoryChange(category.name)}>{category.name}</Button>
      ))
    }
    </>
  )
};

const mapStateToProps = ({category}) => {
  return{
    categories: category.categories,
  }
}

const mapDispatchToProps = {
  categoryChange,
}

export default connect(mapStateToProps, mapDispatchToProps)(Categories);