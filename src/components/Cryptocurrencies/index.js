import React from "react";
import { useGetCryptosQuery } from "../../services/cryptoApi";
import millify from "millify";
import { Link } from "react-router-dom";
import Loading from "../Loading";
import "./Cryptocurrencies.css";

const Cryptocurrencies = ({ simple }) => {
  const { data, isFetching } = useGetCryptosQuery(simple ? 10 : 100);

  if (isFetching) return <Loading />;

  return (
    <div
      className="cryptocurrencies__container"
      style={{
        padding: simple ? "0" : "20px 9%",
        marginTop: simple ? "50px" : "0",
      }}
    >
      <h2>{simple ? "Top 10 Cryptocurrencies" : "Cryptocurrencies"}</h2>
      <div className="cryptocurrencies__grid">
        {data?.data?.coins.map((item) => (
          <Link to={`/crypto/${item.uuid}`}>
            <div className="cryptocurrencies__card" key={item.uuid}>
              <div className="cryptocurrencies__cardHeader">
                <h4>
                  {item.rank}. {item.name}
                </h4>
                <img src={item.iconUrl} alt={item.name} />
              </div>
              <div className="cryptocurrencies__cardInfos">
                <div className="cryptocurrencies__cardInfo">
                  <h4>Price:</h4>
                  <p> {millify(item.price)}</p>
                </div>
                <div className="cryptocurrencies__cardInfo">
                  <h4>Market Cap:</h4>
                  <p> {millify(item.marketCap)}</p>
                </div>
                <div className="cryptocurrencies__cardInfo">
                  <h4>Change:</h4>
                  <p> {millify(item.change)}</p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Cryptocurrencies;
