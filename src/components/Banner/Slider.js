import React, { useEffect, useState } from 'react'
import { makeStyles } from '@mui/styles';
import { theme } from 'antd';
import { CryptoState } from '../../CryptoContext';
import axios from 'axios';
import { TrendingCoins } from '../../config/api';
import AliceCarousel from 'react-alice-carousel';
import { Link } from 'react-router-dom';
const useStyles = makeStyles((theme)=>({

slider:{

    height:"40%",
    display:"flex",
    alignItems:"center",
},

sliderItem:{
    display: "flex",
      flexDirection: "column",
      alignItems: "center",
      cursor: "pointer",
      textTransform: "uppercase",
      color: "white",
    },

}));

export function numberWithCommas(x){
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g,"");
}


const Slider = () => {

    const [trending, setTrending] = useState([]);
  const { currency, symbol } = CryptoState();

  const fetchTrendingCoins = async ()=>  {

    const {data} = await axios.get(TrendingCoins(currency));
    setTrending(data);
  }
  console.log(trending);

  useEffect(()=>{

    fetchTrendingCoins();
 },[currency]);


const classes = useStyles();

const items= trending.map((coin)=>{
    let profit = coin?.price_change_percentage_24h >= 0;
return(
<Link className={classes.sliderItem}
    to ={`/coins/${coin.id}`}>
<img
 src={coin?.image}
 alt={coin.name}
 height="80"
 style={{ marginBottom: 10 }}

></img>
<span>{coin?.symbol}&nbsp;
<span
style={{
    color: profit > 0 ? "rgb(14, 203, 129)" : "red",
    fontWeight: 500,
  }}
>
    {profit && "+"}
    {coin?.price_change_percentage_24h?.toFixed(2)}%
</span>
</span>
<span style={{ fontSize: 22, fontWeight: 500 }}>
          {symbol} {numberWithCommas(coin?.current_price.toFixed(2))}
        </span>
    </Link>
   

)

})

const responsive = {
    0:{
        items:2,
    },
    512:{
        items:7,
    }
};
  return (
    <div className={classes.slider}>
      <AliceCarousel 
    mouseTracking
    infinite
    autoPlayInterval={1000}
    animationDuration={1500}
    disableDotsControl
    responsive={responsive}
    autoPlay
    items={items}
    />
    </div>
  )
}

export default Slider;
