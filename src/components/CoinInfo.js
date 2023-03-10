import { CircularProgress, createTheme, ThemeProvider } from '@mui/material';
import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react';
import { Line } from 'react-chartjs-2';
import { HistoricalChart } from '../config/api';
import { CryptoState } from '../CryptoContext';
import { chartDays } from '../config/data';
import SelectButton from './SelectButton';
import { Chart as ChartJS, registerables } from 'chart.js';
import { Chart } from 'react-chartjs-2'
ChartJS.register(...registerables);

const CoinInfo = ({coin}) => {

  const theme = createTheme();

  const [historicalData,setHistoricalData] = useState();

  const [days,setDays] = useState(1);

  const {currency} = CryptoState();

  const [flag,setflag] = useState(false);

  const fetchHistoricData = async ()=>{

    const {data} = await axios.get(HistoricalChart(coin.id,days,currency));

    setflag(true);

    setHistoricalData(data.prices);
  }

  useEffect(()=>{

    fetchHistoricData();
 // eslint-disable-next-line react-hooks/exhaustive-deps
  },[currency,days]);

  const darkTheme= createTheme({
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





  return (
    <ThemeProvider theme={darkTheme}>
  <div style={{
      width: "75%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      marginTop: 25,
      padding: 40,
      [theme.breakpoints.down("md")]: {
        width: "100%",
        marginTop: 0,
        padding: 20,
        paddingTop: 0,
      },
    }}>
       {!historicalData | flag===false ? (
          <CircularProgress
            style={{ color: "#01fdf1" }}
            size={230}
            thickness={1}
          />
        ) : (
          <>
            <Line
              data={{
                labels: historicalData.map((coin) => {
                  let date = new Date(coin[0]);
                  let time =
                    date.getHours() > 12
                      ? `${date.getHours() - 12}:${date.getMinutes()} PM`
                      : `${date.getHours()}:${date.getMinutes()} AM`;
                  return days === 1 ? time : date.toLocaleDateString();
                }),

      datasets: [{
          data: historicalData.map((coin) => coin[1]),
          label: `Price ( Past ${days} Days ) in ${currency}`,
          borderColor: "#01fdf1",
          },
          ],
        }}
          options={{
          elements: {
          point: {
            radius: 1,
                  },
              },
              }}
            />
            <div
              style={{
                display: "flex",
                marginTop: 20,
                justifyContent: "space-around",
                width: "100%",
              }}
            >
              {chartDays.map((day) => (
                <SelectButton
                  key={day.value}
                  onClick={() => {setDays(day.value);
                    setflag(false);
                  }}
                  selected={day.value === days}
                >
                  {day.label}
                </SelectButton>
              ))}
            </div>
          </>
        )}
      </div>
    </ThemeProvider>
  )
}

export default CoinInfo;
