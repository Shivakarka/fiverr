import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Success = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const makeRequest = async () => {
      try {
        setTimeout(() => {
          navigate("/orders");
        }, 5000);
      } catch (err) {
        console.log(err);
      }
    };
    makeRequest();
  }, []);

  return (
    <div style={{ width: "80vw", margin: "0 auto" }}>
      <h1 style={{ margin: "100px auto" }}>
        Payment successful. You are being redirected to the orders page. Please
        do not close the page
      </h1>
    </div>
  );
};

export default Success;
