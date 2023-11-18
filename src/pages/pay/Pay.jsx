import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./Pay.scss";

const Pay = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    if (!currentUser) {
      navigate("/login");
    }
  }, []);

  return (
    <div className="payment-container ">
      <h1 className="">Pay Order Fees :</h1>
      <form
        action={`http://localhost:8800/api/orders/createpayment/${id}`}
        method="POST"
      >
        <button
          type="submit"
          id="checkout-button"
          className="primary-button  text-center"
        >
          Pay Now
        </button>
      </form>
    </div>
  );
};

export default Pay;
