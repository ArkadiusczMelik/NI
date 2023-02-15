import { makeStyles } from '@mui/styles';
import React from 'react'
import { Amplify } from 'aws-amplify';
import awsExports from '../aws-exports';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
const LogoutButton = (selected, onClick) => {

    const useStyles = makeStyles({
        logoutButton: {
          border: "1px solid #01fdf1",
          borderRadius: 5,
          fontFamily: "Montserrat",
          cursor: "pointer",
          backgroundColor: selected ? "#01fdf1" : "",
          color: selected ? "white" : "",
          fontWeight: selected ? 700 : 500,
          "&:hover": {
            backgroundColor: "#01fdf1",
            color: "white",
          },
          width: "100px",
          height:"50px",
           marginLeft: 25,
        },
      });
    
      const classes = useStyles();
  return (

    
      <button  className={classes.logoutButton}>Sign out</button>
    

  )
}

export default LogoutButton;
