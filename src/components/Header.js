import { AppBar,Container, MenuItem, Toolbar,Select, Typography } from '@mui/material';
import { createTheme,ThemeProvider } from '@mui/material/styles';
import { Authenticator } from '@aws-amplify/ui-react';
import React from 'react'
import { Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import { CryptoState } from '../CryptoContext';
import './header.css';
import LogoutButton from './LogoutButton';



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







function Header(props) {


  const handleLogout =()=>{
    props.logOut();
  }

  const {currency,setCurrency} = CryptoState();
  
  console.log(currency);
 
  return (
    <ThemeProvider theme={lightTheme}>
    <AppBar color='transparent' position='static'>
    <Nav>
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
<Nav.Link onClick={handleLogout}><LogoutButton/></Nav.Link> 
      </Toolbar>
      
       
      
      </Container>
      </Nav>
    </AppBar>
    </ThemeProvider>
  )
}

export default Header;
