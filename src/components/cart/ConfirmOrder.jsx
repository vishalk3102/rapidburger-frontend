import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createOrder } from "../../redux/actions/orderAction";
import { useEffect } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const ConfirmOrder = () => {
  const [paymentMethod, setPaymentMethod] = useState("");
  const [disableBtn, setDisableBtn] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { cartItems, subTotal, tax, shippingCharges, total, shippingInfo } =
    useSelector((state) => state.cart);
  const { message, error } = useSelector((state) => state.order);

  const submitHandler = (e) => {
    e.preventDefault();
    setDisableBtn(true);

    if (paymentMethod === "COD") {
      dispatch(
        createOrder(
          shippingInfo,
          cartItems,
          paymentMethod,
          subTotal,
          tax,
          shippingCharges,
          total
        )
      );
    } else {
    }
  };

  useEffect(() => {
    if (message) {
      toast.success(message);
      dispatch({ type: "clearMessage" });
      dispatch({ type: "emptyState" });
      navigate("/paymentsuccess");
    }
    if (error) {
      toast.error(message);
      dispatch({ type: "clearError" });
      setDisableBtn(false);
    }
  }, [dispatch, message, error, navigate]);
  return (
    <section className="confirmOrder">
      <main>
        <h1>Confirm Order</h1>

        <form onSubmit={submitHandler}>
          <div>
            <label>Cash On Delivery</label>
            <input
              type="radio"
              name="payment"
              onChange={(e) => setPaymentMethod("COD")}
              required
            />
          </div>
          <div>
            <label>Online</label>
            <input
              type="radio"
              name="payment"
              onChange={(e) => setPaymentMethod("Online")}
            />
          </div>

          <button disabled={disableBtn} type="submit">
            Place Order
          </button>
        </form>
      </main>
    </section>
  );
};

export default ConfirmOrder;
