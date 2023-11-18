import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Cancel = () => {
  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    const makeRequest = async () => {
      try {
        setTimeout(() => {
          navigate("/gig/" + id);
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
        Payment Cancelled. You are being redirected to the gig page. Please do
        not close the page
      </h1>
    </div>
  );
};

export default Cancel;
