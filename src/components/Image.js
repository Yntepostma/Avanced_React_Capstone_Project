import { useState, useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "./Context";
import "../styles.css";

const Image = ({ className, imgUrl, id, favorite }) => {
  const [hover, setHover] = useState(false);
  const { toggleFavorite, addItem } = useContext(Context);

  const handleMouseEnter = () => {
    setHover(true);
  };

  const handleMouseLeave = () => {
    setHover(false);
  };

  const heartIcon = () => {
    if (favorite && hover) {
      return (
        <>
          <i
            onClick={() => toggleFavorite(id)}
            className="ri-heart-fill favorite"
          ></i>
          <i
            onClick={() => addItem(id)}
            className="ri-add-circle-line cart"
          ></i>
        </>
      );
    } else if (favorite) {
      return (
        <i
          onClick={() => toggleFavorite(id)}
          className="ri-heart-fill favorite"
        ></i>
      );
    } else if (hover) {
      return (
        <>
          <i
            onClick={() => toggleFavorite(id)}
            className="ri-heart-line favorite"
          ></i>
          <i
            onClick={() => addItem(id)}
            className="ri-add-circle-line cart"
          ></i>
        </>
      );
    }
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`${className} image-container`}
    >
      <img src={imgUrl} className={"image-grid"} alt="Photo" />
      {heartIcon()}
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
