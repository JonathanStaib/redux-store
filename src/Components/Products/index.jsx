import { Card } from "@mantine/core"
import { connect } from "react-redux"

const Products = ({categories, activeCategory, products, productName}) => {
  if(activeCategory){
    let displayCategory = categories.filter(products => products=== activeCategory)
  }

  return(
    <>
      <h2>{activeCategory}</h2>
      {
        displayCategory.map((category, idx) =>(
          <Card>
            <h4>{productName}</h4>
          </Card>

        ))
      }


      {/* category.map{() => {
      <Card>
      <img item.img/>
      <h4> item.name <h4/>
      <p> item.description <p/>
      <Button onClick=addToCart > ADD TO CART <Button/>
      <Button onClick= details > VEIW DETAILS <Button/>
      <Card/>
    }  */}
    </>
  )
}


const mapStateToProps = ({category}) => {
  return{
    categories: category.categories,
    activeCateory: category.activeCateory,
    product: category.products,
    productCategory: category.products.category,
    productName: category.products.name,
  }
}

export default connect(mapStateToProps, null)(Products);