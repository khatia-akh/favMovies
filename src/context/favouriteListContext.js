import { createContext } from "react";

export const FavouriteListContext = createContext({
  favouriteList: [],
  updateFavouriteList: () => {
    throw new Error("update() not implemented");
  },
});
