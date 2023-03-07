import React from "react";
import { useContext } from "react";
import { Context } from "../components/Context";
import { getClass } from "../utils";
import Image from "../components/Image";

const Photos = () => {
  const { photos } = useContext(Context);
  return (
    <main className="photos">
      {photos?.map((photo, index) => {
        return (
          <Image
            key={photo.id}
            className={getClass(index)}
            imgUrl={photo.url}
            favorite={photo.isFavorite}
            id={photo.id}
            photo={photo}
          />
        );
      })}
    </main>
  );
};

export default Photos;
