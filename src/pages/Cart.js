import React from "react";
import "../styles.css";
import { useContext, useState } from "react";
import { Context } from "../components/Context";
import CartItem from "../components/CartItem";

const Cart = () => {
  const { cartItems, setCartItems } = useContext(Context);
  const [clicked, setClicked] = useState(false);

  const totalCost = cartItems.length * 5.99;

  if (clicked) {
    setTimeout(() => {
      console.log("Order placed");
      setClicked(false);
      setCartItems([]);
    }, 3000);
  }

  return (
    <main className="cart-page">
      <h1>Check out</h1>
      {cartItems.map((item) => {
        return <CartItem key={item.id} item={item} />;
      })}
      <p className="total-cost">
        Total:{" "}
        {`${totalCost.toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
        })}`}
      </p>
      {cartItems.length > 0 ? (
        <div className="order-button">
          <button onClick={() => setClicked(true)}>
            {clicked ? "Ordering" : "Place Order"}
          </button>
        </div>
      ) : (
        <p>You have no items in your cart</p>
      )}
    </main>
  );
};

export default Cart;
