
import { makeStyles } from '@mui/styles';
import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { SingleCoin } from '../config/api';
import { CryptoState } from '../CryptoContext';
import CoinInfo from '../components/CoinInfo';
import { styled } from '@mui/material/styles'
import { ThemeProvider,createTheme } from '@mui/material/styles';
import { LinearProgress, Typography } from '@mui/material';
import ReactHtmlParser from 'react-html-parser';
import  numberWithCommas  from '../components/CoinTable';



const CoinPage = () => {

  const theme = createTheme();


  const {id} = useParams();
  const [coin,setCoin] = useState();

  const {currency,symbol} = CryptoState();

  const fetchCoin = async()=>{

    const {data} = await axios.get(SingleCoin(id));

    setCoin(data);
    
  }

  
 const useStyles = styled("div")(({theme}) => ({
  
  container: {
    display: "flex",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "center",
    },
  },
  sidebar: {
    width: "30%",
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: 25,
    borderRight: "2px solid grey",
  },


 }));






  useEffect(()=>{

    fetchCoin();
 // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  if (!coin) return <LinearProgress style={{ backgroundColor: "violet" }} />;

  return (
    <ThemeProvider theme={theme}>
    <div style={{

  display: "flex",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    alignItems: "center",
  },
}
}>
      <div style={{

  width: "30%",
  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginTop: 25,
  borderRight: "2px solid grey",
}}>
      <img
          src={coin?.image.large}
          alt={coin?.name}
          height="200"
          style={{ marginBottom: 20}}
        />

<Typography variant='h3' style={{
      fontWeight: "bold",
      marginBottom: 20,
      fontFamily: "Montserrat",


    }}>{coin?.name}
    </Typography>

    <Typography variant='subtitle1' style={{
      width:"100%",
      fontFamily:"Montserrat",
      padding:25,
      paddingBottom:15,
      paddingTop:0,
      textAlign:"justify",
    }}>{ReactHtmlParser(coin?.description.en.split(". ")[0])}.</Typography>

<div style={
  {
    alignSelf: "start",
    padding: 25,
    paddingTop: 10,
    width: "100%",
    [theme.breakpoints.down("md")]: {
      display: "flex",
      justifyContent: "space-around",
    },
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      alignItems: "center",
    },
    [theme.breakpoints.down("xs")]: {
      alignItems: "start",
    },
  }
}>
  <span style={{ display: "flex" }}>
  <Typography variant="h5" style={{
  fontWeight: "bold",
  marginBottom: 20,
  fontFamily: "Montserrat",

 }}>
  Rank:
  </Typography>
  &nbsp; &nbsp;
  
  <Typography variant="h5" style={{
        fontFamily: "Montserrat",
      }}>{
      coin?.market_cap_rank
      }</Typography>
  </span>
  <span style={{ display: "flex" }}>
  <Typography variant="h5" style={{
  fontWeight: "bold",
  marginBottom: 20,
  fontFamily: "Montserrat",

 }}>
  Current Price:
  </Typography>

  &nbsp; &nbsp;

  <Typography
  variant="h5"
  style={{
  fontFamily:"Montserrat",
  }}>
  {symbol}{""}{(coin?.market_data.current_price[currency.toLowerCase()])}
  </Typography>
  </span>

  <span style={{ display: "flex" }}>

 <Typography variant="h5" style={{
  fontWeight: "bold",
  marginBottom: 20,
  fontFamily: "Montserrat",

 }}>
 Market Cap:
 </Typography>
  &nbsp; &nbsp;
<Typography
      variant="h5"
      style={{
      fontFamily: "Montserrat",
      }}>
  {symbol}{" "}
  {(coin?.market_data.market_cap[currency.toLowerCase()].toString().slice(0, -6))}
M
</Typography>
          </span>
  
        </div>

        
      </div>

      <CoinInfo coin={coin}/>

      </div>
    </ThemeProvider>
  )
}

export default CoinPage;
