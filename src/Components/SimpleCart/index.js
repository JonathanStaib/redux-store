import { Button } from "@mui/material";
import { useSelector } from "react-redux";

const Cart = () => {

const state = useSelector((state) => state.cart);
console.log(state);

  return(
    <>
    <ul>
      {
        state.map((item, idx) =>(
          <>
          <li style={{textDecoration:'none'}}>{item.name}</li>
          <Button>DELETE</Button>
          </>
        ))
      }
    </ul>
  </>
  )
}

export default Cart;