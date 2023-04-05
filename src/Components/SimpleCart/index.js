import { useSelector } from "react-redux";

const Cart = () => {

const state = useSelector((state) => state.cart);
console.log(state);

  return(
    <ul>
      {
        state.map((item, idx) =>(
          <li>{item}</li>
        ))
      }
    </ul>
  )
}

export default Cart;