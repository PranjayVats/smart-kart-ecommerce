import React, { Fragment, useState, useEffect } from "react";
import MetaData from "../Layout/MetaData";
import { useDispatch, useSelector } from "react-redux";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import CheckoutSteps from "../Cart/CheckoutSteps";
import "./ConfirmOrder.css";
import { ethers } from "ethers";
import { createOrder } from "../../actions/orderAction";

function ConfirmOrder({ history, dappazon, provider, account, setAccount }) {
  const { shippingInfo, cartItems } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.user);

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  );
  const shippingCharges = subtotal >= 1000 ? 0 : 200;
  const tax = subtotal * 0.18;
  const totalPrice = subtotal + shippingCharges + tax;
  const address = `${shippingInfo.address}, ${shippingInfo.city}, ${shippingInfo.state}, ${shippingInfo.pinCode}, ${shippingInfo.country}`;

  const proceedToPayment = async () => {
    const data = { subtotal, shippingCharges, tax, totalPrice };
    sessionStorage.setItem("orderInfo", JSON.stringify(data));
    history.push("/process/payment");
  };

  const dispatch = useDispatch();
  const [connected, setConnected] = useState(
    account ? "Connected" : "Connect To MetaMask"
  );

  // const fetchDetails = async () => {
  //   const events = await dappazon.queryFilter("Buy");
  //   // const orders = events.filter(
  //   //   (event) =>
  //   //     event.args.buyer === account &&
  //   //     event.args.itemId.toString() === item.id.toString()
  //   // );

  //   // if (orders.length === 0) return;

  //   // const order = await dappazon.orders(account, orders[0].args.orderId);
  //   // setOrder(order);
  // };
  const connectHandler = async () => {
    if (!account && connected !== "Connected") {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      const account = ethers.utils.getAddress(accounts[0]);
      setAccount(account);
      setConnected("Connected");
    }
  };
  const buyHandler = async () => {
    if (account !== null) {
      const signer = await provider.getSigner();
      try {
        let totalCost = (totalPrice / 144705).toFixed(2).toString();
        let transaction = await dappazon.connect(signer).buy(6, {
          value: ethers.utils.parseUnits(totalCost, "ether"),
        });
        await transaction.wait();

        //After Successful payment
        const data = { subtotal, shippingCharges, tax, totalPrice };
        sessionStorage.setItem("orderInfo", JSON.stringify(data));
        const orderInfo = JSON.parse(sessionStorage.getItem("orderInfo"));
        const order = {
          shippingInfo,
          orderItems: cartItems,
          itemsPrice: orderInfo.subtotal,
          taxPrice: orderInfo.tax,
          shippingPrice: orderInfo.shippingCharges,
          totalPrice: orderInfo.totalPrice,
        };
        order.paymentInfo = {
          id: "62a5bc03cf7c0100042be410",
          status: "succeeded",
        };
        dispatch(createOrder(order));
        window.location.replace("/success");
      } catch (e) {
        alert("Payment Failed");
      }
    } else {
      alert("Connect first with Metamask");
    }
  };

  return (
    <Fragment>
      <MetaData title="Confirm Order" />
      <CheckoutSteps activeStep={1} />
      <div className="confirmOrderPage">
        <div>
          <div className="confirmShippingArea">
            <Typography>Shipping Info</Typography>
            <div className="confirmShippingAreaBox">
              <div>
                <p>Name:</p>
                <span>{user.name}</span>
              </div>
              <div>
                <p>Phone:</p>
                <span>{shippingInfo.phoneNo}</span>
              </div>
              <div>
                <p>Address:</p>
                <span>{address}</span>
              </div>
            </div>
          </div>
          <div className="confirmCartItems">
            <Typography>Your Cart Items</Typography>
            <div className="confirmCartItemsContainer">
              {cartItems &&
                cartItems.map((item) => (
                  <div key={item.product}>
                    <img src={item.image} alt="Product" />
                    <Link to={`/product/${item.product}`}>{item.name}</Link>
                    <span>
                      {item.quantity} x ₹{item.price} =
                      <b> ₹ {item.price * item.quantity}</b>
                    </span>
                  </div>
                ))}
            </div>
          </div>
        </div>
        <div>
          <div className="orderSummary">
            <Typography>Order Summary</Typography>
            <div>
              <div>
                <p>Subtotal:</p>
                <span>₹{subtotal}</span>
              </div>
              <div>
                <p>Shipping Charges</p>
                <span>₹{shippingCharges}</span>
              </div>
              <div>
                <p>GST</p>
                <span>₹{tax.toFixed(2)}</span>
              </div>
            </div>
            <div className="orderSummaryTotal">
              <p>
                <b>Total:</b>
              </p>
              <span>₹{totalPrice}</span>
            </div>
            <button onClick={proceedToPayment}>Proceed To Payment</button>
            OR
            <button onClick={connectHandler} disabled={account ? true : false}>
              {connected}
            </button>
            <button onClick={buyHandler}>Pay With Metamask</button>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default ConfirmOrder;