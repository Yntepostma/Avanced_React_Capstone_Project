import "../styles.css";
import { useContext, useState } from "react";
import { Context } from "./Context";
import useHover from "../hooks/useHover";

const CartItem = ({ item }) => {
  const { removeItem } = useContext(Context);
  const [hover, ref] = useHover();

  const icon = hover ? "fill" : "line";

  return (
    <div className="cart-item">
      <i
        ref={ref}
        onClick={() => removeItem(item.id)}
        className={`ri-delete-bin-${icon}`}
      ></i>

      <img src={item.url} width="130px" />
      <p>$5.99</p>
    </div>
  );
};

export default CartItem;
