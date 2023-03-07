import { useState, useContext, useEffect } from "react";
import PropTypes from "prop-types";
import useHover from "../hooks/useHover";
import { Context } from "./Context";
import "../styles.css";

const Image = ({ className, imgUrl, id, favorite, photo }) => {
  const [hover, ref] = useHover();
  const { toggleFavorite, addItem, cartItems, removeItem } =
    useContext(Context);

  const heartIcon = () => {
    if (favorite) {
      return (
        <i
          onClick={() => toggleFavorite(id)}
          className="ri-heart-fill favorite"
        ></i>
      );
    } else if (hover) {
      return (
        <i
          onClick={() => toggleFavorite(id)}
          className="ri-heart-line favorite"
        ></i>
      );
    }
  };

  const cartIcon = () => {
    const item = cartItems.find((item) => item.id === id);
    if (item) {
      return (
        <i
          className="ri-shopping-cart-fill cart"
          onClick={() => removeItem(id)}
        ></i>
      );
    } else if (hover) {
      return (
        <i
          className="ri-add-circle-line cart"
          onClick={() => addItem(photo)}
        ></i>
      );
    }
  };

  return (
    <div ref={ref} className={`${className} image-container`}>
      <img src={imgUrl} className={"image-grid"} alt="Photo" />
      {heartIcon()}
      {cartIcon()}
    </div>
  );
};

Image.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
  favorite: PropTypes.bool,
};

Image.defaultProps = {
  favorite: false,
};

export default Image;
