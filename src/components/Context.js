import { createContext, useState, useEffect } from "react";
import axios from "axios";

const Context = createContext();

const ContextProvider = ({ children }) => {
  const [photos, setPhotos] = useState([]);
  const getPhotos = async () => {
    try {
      const response = await axios.get(
        "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"
      );
      setPhotos(response.data);
    } catch (e) {
      console.log("Error: ", e.message);
    }
  };

  console.log(photos);

  useEffect(() => {
    getPhotos();
  }, []);

  const toggleFavorite = (id) => {
    const newArray = photos.map((photo) => {
      if (photo.id === id) {
        return { ...photo, isFavorite: !photo.isFavorite };
      } else {
        return photo;
      }
    });
    setPhotos(newArray);
  };

  const [cartItems, setCartItems] = useState([]);

  const addItem = (photo) => {
    const copyArr = cartItems;
    setCartItems([...copyArr, photo]);
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter((p) => id !== p.id));
  };

  return (
    <Context.Provider
      value={{
        photos,
        toggleFavorite,
        addItem,
        cartItems,
        removeItem,
        setCartItems,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export { ContextProvider, Context };
