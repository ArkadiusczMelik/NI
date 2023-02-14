import React, { useEffect, useState } from 'react'
import { CoinList } from '../config/api';
import { CryptoState } from '../CryptoContext';
import axios from 'axios';
import './CoinTable.css';
import { Container, TextField,createTheme, ThemeProvider, Typography, TableContainer, LinearProgress, Table, TableHead, TableRow, TableCell, TableBody, Paper} from '@mui/material';
import { makeStyles } from '@mui/styles';
import {  useNavigate } from 'react-router-dom';
import { Pagination } from '@material-ui/lab';

export function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

const CoinTable = ()=> {

    const {currency,symbol} = CryptoState();

    const [coins,setCoins]= useState([]);

    const [search,setSearch]= useState("");

    const [loading,setLoading]= useState(false);

    const [page, setPage] = useState(1);



    const fetchCoins = async () => {

    setLoading(true);

        const {data} =  await axios.get(CoinList(currency));

    setCoins(data);
    setLoading(false);

    };

  

    useEffect(()=> {

        fetchCoins();

    },[currency]);

    const handleSearch = () => {
        return coins.filter(
          (coin) =>
            coin.name.toLowerCase().includes(search) ||
            coin.symbol.toLowerCase().includes(search)
        );
      };

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


        const useStyles = makeStyles({
            row: {
              backgroundColor: "#16171a",
              cursor: "pointer",
              "&:hover": {
                backgroundColor: "#131111",
              },
              fontFamily: "Montserrat",
            },
            pagination: {
              "& .MuiPaginationItem-root": {
                color: "gold",
              },
            },
          });
        
          const classes = useStyles();

          const navigate = useNavigate();

          


  return (
    <ThemeProvider theme={lightTheme}>
    <Container style={{textAlign:"center"}}>
    <Typography variant='h3'
    style={
        {textAlign:"center",
        margin: 18,
        fontFamily:"Montserrat",
    }
    }
    >
        Cryptocurrency rate by Coin Market Cap 
    </Typography>

    <TextField className='search-lable'
    label="Search any for cruptocurrency..."
    variant='outlined'
    style={{
        marginBottom:20,
        width:"100%",
        color:"white",
        borderColor:"white",
    }}
    onChange={(e)=>setSearch(e.target.value)}
    />

    <TableContainer component={Paper}>
{loading ? (
            <LinearProgress style={{ backgroundColor: "violet" }} />
          ) : (

            <Table aria-label='simple table'>
                <TableHead style={{ backgroundColor: "indigo",background:"linear-gradient(to right bottom, #01fdf1, #9603f8)" }}>
                <TableRow>
                  {["Crypto", "Price", "24h Change", "Market Cap"].map((head) => (
                    <TableCell
                      style={{
                        color: "white",
                        fontWeight: "700",
                        fontFamily: "Montserrat",
                      }}
                      key={head}
                      align={head === "Crypto" ? "" : "right"}
                    >
                      {head}
                    </TableCell>
                  ))}
                </TableRow>
                    </TableHead>

                    <TableBody>
                    {handleSearch().slice((page - 1)*10,(page - 1)*10+10)
                  .map((row) => {
                    const profit = row.price_change_percentage_24h > 0;
                    return (
                      <TableRow
                        onClick={() =>  navigate(`/coins/${row.id}`)}
                        className={classes.row}
                        key={row.name}
                      >
                        <TableCell
                          component="th"
                          scope="row"
                          style={{
                            display: "flex",
                            gap: 15,
                          }}
                        >
                          <img
                            src={row?.image}
                            alt={row.name}
                            height="50"
                            style={{ marginBottom: 10 }}
                          />
                          <div
                            style={{ display: "flex", flexDirection: "column" }}
                          >
                            <span
                              style={{
                                textTransform: "uppercase",
                                fontSize: 22,
                              }}
                            >
                              {row.symbol}
                            </span>
                            <span style={{ color: "white" }}>
                              {row.name}
                            </span>
                          </div>
                        </TableCell>
                        <TableCell align="right">
                          {symbol}{" "}
                          {numberWithCommas(row.current_price.toFixed(2))}
                        </TableCell>
                        <TableCell
                          align="right"
                          style={{
                            color: profit > 0 ? "rgb(14, 203, 129)" : "red",
                            fontWeight: 500,
                          }}
                        >
                          {profit && "+"}
                          {row.price_change_percentage_24h.toFixed(2)}%
                        </TableCell>
                        <TableCell align="right">
                          {symbol}{" "}
                          {numberWithCommas(
                            row.market_cap.toString().slice(0, -6)
                          )}
                          M
                        </TableCell>
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          )}

    </TableContainer>
    <Pagination
          count={(handleSearch()?.length / 10).toFixed(0)}
          style={{
            padding: 20,
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
          classes={{ ul: classes.pagination }}
          onChange={(_, value) => {
            setPage(value);
            window.scroll(0, 450);
          }}
        />
    </Container>

    </ThemeProvider>
  )
}

export default CoinTable;
