import React from "react";
import "./CryptoDetail.css";

const CryptoDetail = ({ Icon, title, value }) => {
  return (
    <div className="cryptoDetails__detail">
      {Icon}
      <h4>{title}:</h4>
      <p>{value}</p>
    </div>
  );
};

export default CryptoDetail;
