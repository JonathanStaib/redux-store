import { createStyles, Footer } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  footer: {
    backgroundColor: theme.colors.gray[4],
    height: '200%',
    width: '100%',
  },

}));

const Footers = () => {

  const { classes } = useStyles();

  return(
    <Footer className={classes.footer}>&copy;Jonathan Staib</Footer>
  )
}

export default Footers;