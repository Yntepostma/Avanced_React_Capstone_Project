import { createContext, useState, useEffect } from "react";
import axios from "axios";

const Context = createContext();

const ContextProvider = ({ children }) => {
  const [photos, setPhotos] = useState([]);

  console.log("photos", photos);

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

  useEffect(() => {
    getPhotos();
  }, []);

  const toggleFavorite = (id) => {
    const newArray = photos?.map((photo) => {
      if (photo.id === id) {
        return { ...photo, isFavorite: !photo.isFavorite };
      } else {
        return photo;
      }
    });

    setPhotos(newArray);
  };

  const [cartItems, setCartItems] = useState([]);

  const addItem = (id) => {
    const item = photos?.find((photo) => {
      return photo.id === id;
    });
    setCartItems([...cartItems, item]);
  };

  return (
    <Context.Provider value={{ photos, toggleFavorite, addItem }}>
      {children}
    </Context.Provider>
  );
};

export { ContextProvider, Context };
