import { NavLink } from "@mantine/core";
import { useSelector } from "react-redux";

const Header = () => {

  const state = useSelector((state) => state.cart);

  return(
    <>
    <h1>OUR STORE</h1>

    <NavLink>CART ({state.length})</NavLink>

    </>
  )
}

export default Header;