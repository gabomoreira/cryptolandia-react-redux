import React from "react";
import "./Homepage.css";
import Cryptocurrencies from "../Cryptocurrencies";
import Loading from "../Loading";
import { useGetCryptosQuery } from "../../services/cryptoApi";
import millify from "millify";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import CurrencyExchangeOutlinedIcon from "@mui/icons-material/CurrencyExchangeOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import StoreOutlinedIcon from "@mui/icons-material/StoreOutlined";
import LocalGroceryStoreOutlinedIcon from "@mui/icons-material/LocalGroceryStoreOutlined";

const Homepage = () => {
  const { data, isFetching } = useGetCryptosQuery(10);
  const globalCryptos = data?.data?.stats;
  if (isFetching) return <Loading />;

  return (
    <div className="homepage__container">
      <div className="homepage__info">
        <h2>Global Cryptocurrencies Stats</h2>
        <div className="homepage__infoStats">
          <div className="homepage__stats">
            <MonetizationOnOutlinedIcon /> <h4>Total Coins:</h4>
            <p>{millify(globalCryptos.totalCoins)}</p>
          </div>
          <div className="homepage__stats">
            <CurrencyExchangeOutlinedIcon /> <h4>Total Exchanges:</h4>
            <p>{millify(globalCryptos.totalExchanges)}</p>
          </div>
          <div className="homepage__stats">
            <StoreOutlinedIcon /> <h4>Total Market Cap:</h4>
            <p>{millify(globalCryptos.totalMarketCap)}</p>
          </div>
          <div className="homepage__stats">
            <LocalGroceryStoreOutlinedIcon />
            <h4>Total Markets:</h4>
            <p>{millify(globalCryptos.totalMarkets)}</p>
          </div>
          <div className="homepage__stats">
            <CalendarTodayOutlinedIcon />
            <h4>Total 24h Day: </h4>
            <p>{millify(globalCryptos.total24hVolume)}</p>
          </div>
        </div>
      </div>
      <Cryptocurrencies simple />
    </div>
  );
};

export default Homepage;
