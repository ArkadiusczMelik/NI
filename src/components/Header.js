import { AppBar,Container, MenuItem, Toolbar,Select, Typography } from '@mui/material';
import { createTheme,ThemeProvider } from '@mui/material/styles';

import React from 'react'
import { useNavigate } from 'react-router-dom';

import { CryptoState } from '../CryptoContext';
import './header.css';



const lightTheme= createTheme({
  palette:{
    primary:{
      main: "#fff",
    },
    mode: "dark",
  },

  text: {
      primary: '#fff',
   
    },
  
  });







const Header = () => {

  const {currency,setCurrency} = CryptoState();
  
  console.log(currency);
 
  return (
    <ThemeProvider theme={lightTheme}>
    <AppBar color='transparent' position='static'>
      <Container>
      <Toolbar>
<Typography><h1 className='app-header'>CRYPTO OBSERVER</h1></Typography>
<Select variant="outlined" style={{
  color:"white",
  width:100,
  height:50,
  marginLeft:500,
borderColor:"white",
}}
value={currency}
onChange={(e) => setCurrency(e.target.value)}

>
  <MenuItem value={"USD"} className="menu-item">USD</MenuItem>
  <MenuItem value={"KZT"} className="menu-item">KZT</MenuItem>
</Select>
      </Toolbar>
      </Container>
    </AppBar>
    </ThemeProvider>
  )
}

export default Header;
