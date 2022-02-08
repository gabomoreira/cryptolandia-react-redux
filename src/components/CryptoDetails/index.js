import React from "react";
import { useParams } from "react-router-dom";
import { useGetCryptoDetailsQuery } from "../../services/cryptoApi";
import "./CryptoDetails.css";
import millify from "millify";
import Loading from "../Loading";
import DriveFileRenameOutlineOutlinedIcon from "@mui/icons-material/DriveFileRenameOutlineOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import CurrencyExchangeOutlinedIcon from "@mui/icons-material/CurrencyExchangeOutlined";
import ChangeCircleOutlinedIcon from "@mui/icons-material/ChangeCircleOutlined";
import StoreOutlinedIcon from "@mui/icons-material/StoreOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import InsertLinkOutlinedIcon from "@mui/icons-material/InsertLinkOutlined";
import CryptoDetail from "../CryptoDetail";

const CryptoDetails = () => {
  const { coinId } = useParams();
  const { data, isFetching } = useGetCryptoDetailsQuery(coinId);
  const cryptoDetails = data?.data?.coin;

  if (isFetching) return <Loading />;

  return (
    <div className="cryptoDetails__container">
      <div className="cryptoDetails__header">
        <img src={cryptoDetails?.iconUrl} alt="" />
        <h2>{cryptoDetails?.name} Details</h2>
      </div>
      <div className="cryptoDetails__flex">
        <div className="cryptoDetails__details">
          <h2>
            <InfoOutlinedIcon />
            Some Details
          </h2>
          <CryptoDetail
            Icon={<DriveFileRenameOutlineOutlinedIcon />}
            title="Name"
            value={cryptoDetails?.name}
          />
          <CryptoDetail
            Icon={<MonetizationOnOutlinedIcon />}
            title="Symbol"
            value={cryptoDetails?.symbol}
          />
          <CryptoDetail
            Icon={<StarBorderOutlinedIcon />}
            title="Rank"
            value={cryptoDetails?.rank}
          />
          <CryptoDetail
            Icon={<AttachMoneyOutlinedIcon />}
            title="Price"
            value={millify(cryptoDetails?.price)}
          />
          <CryptoDetail
            Icon={<CurrencyExchangeOutlinedIcon />}
            title="Change"
            value={millify(cryptoDetails?.change)}
          />
          <CryptoDetail
            Icon={<StoreOutlinedIcon />}
            title="Number of Markets"
            value={cryptoDetails?.numberOfMarkets}
          />
          <CryptoDetail
            Icon={<CurrencyExchangeOutlinedIcon />}
            title="Number of Exchanges"
            value={cryptoDetails?.numberOfExchanges}
          />
        </div>

        <div className="cryptoDetails__detailsLink">
          <h2>
            <InsertLinkOutlinedIcon />
            Links
          </h2>
          {cryptoDetails?.links?.map((item, i) => (
            <div className="cryptoDetails__detailLink" key={i}>
              <h4>{item.type}: </h4>
              <a href={item.url} target="_blank">
                {item.url.length > 30
                  ? item.url.substring(0, 30) + "..."
                  : item.url}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CryptoDetails;
