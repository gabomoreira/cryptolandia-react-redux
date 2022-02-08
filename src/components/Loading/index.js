import React from "react";
import { SpinnerInfinity } from "spinners-react";
import "./Loading.css";

const Loading = () => {
  return (
    <div className="LoadingContainer">
      <SpinnerInfinity size="100" color="#0081a7" />
    </div>
  );
};

export default Loading;
