import { Container } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { flexbox } from '@mui/system';
import "./banner.jpeg";

import React from 'react'
import { Typography } from '@mui/material';
import Slider from './Slider';

const useStyles= makeStyles(()=>({

    banner:{
        backgroundImage:"url(https://www.numerama.com/wp-content/uploads/2017/12/bitcoin.jpg)",

    },
    bannerContent:{
        height:400,
        display:"flex",
        flexDirection:"column",
        paddingTop:45,
        justifyContent:"space-around",

    },
    tagHeader:{
        display: "flex",
    height: "40%",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",

    }

}));



const Banner = () => {
    const classes = useStyles();


  return (
    <div className={classes.banner}>
    <Container className={classes.bannerContent}>
        <div className={classes.tagHeader}>
        <Typography variant="h2"
        style={{
            fontWeight:"bold",
            marginBottom:20,
            fontFamily:"Montserrat",
        }
        }
        >
            Best Crypto Observer
        </Typography>
        <Typography variant="subtitle1"
        style={{
            color:"darkgrey",
            textTransform:"capitralize",
            fontFamily:"Montserrat",
        }
        }
        >Get any information on cryptocurrency for your fundamental analysis!</Typography>
        </div>
        <Slider/>
    </Container>
    </div>
  )
}

export default Banner;
