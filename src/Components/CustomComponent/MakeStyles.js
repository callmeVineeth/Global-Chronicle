import { makeStyles } from "@mui/styles";
// import { makeStyles } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  card: {
    maxWidth: 650,
    maxHeight: 300,
    margin: theme.spacing(2),
    borderRadius: 0,
    boxShadow: 'none',
    display: 'flex',
    flexDirection: 'row',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column', // Adjust for smaller screens
      maxHeight: 'none', // Adjust other styles for smaller screens
    },
  },
  content: {
    textAlign: 'left',
    backgroundColor: '#d32f2f',
    padding: theme.spacing(2),
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      width: 'auto', // Adjust width for smaller screens if needed
    },
  },
  media: {
    width:'100%',
    minWidth: 300,
    borderRadius: 0,
    backgroundColor: 'black',
    [theme.breakpoints.down('sm')]: {
      minWidth: '100%', // Adjust width for smaller screens
    },
  },
}));

export default useStyles;
