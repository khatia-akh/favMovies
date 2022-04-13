import React, { useState } from "react";
import { FavouriteListContext } from "../context/favouriteListContext";

export const FavouriteListProvider = ({ children }) => {
  const [favouriteList, setFavouriteList] = useState([]);

  const updateFavouriteList = (favourteListInformation) => {
    setFavouriteList(favourteListInformation);
  };

  return (
    <FavouriteListContext.Provider
      value={{
        favouriteList: favouriteList,
        updateFavouriteList: updateFavouriteList,
      }}
    >
      {children}
    </FavouriteListContext.Provider>
  );
};
