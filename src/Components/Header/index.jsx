
import { Grid, Typography } from "@mui/material";
import { useSelector } from "react-redux";

const Header = () => {

  const state = useSelector((state) => state.cart);

  return(
    <>
    <Grid container p={3}>
      <Grid item xs>
        <Typography variant="h4">OUR STORE</Typography>

      </Grid>
      <Grid item xs style={{textAlign: 'right', alignSelf: 'center'}}>
        <Typography >CART ({state.length})</Typography>

      </Grid>
    </Grid>
    </>
  )
}

export default Header;