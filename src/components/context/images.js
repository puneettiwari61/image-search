import React from "react";
import PropTypes from "prop-types";

import imageDataReducer from "./imageDataReducer";

const ImageDataContext = React.createContext();
const ImageDataDispatchContext = React.createContext();

const initialState = {
  searchedPicsArray: [],
  defaultPicsArray: [],
  isSearchTermChanged: false,
};

const ImageDataProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(imageDataReducer, initialState);
  return (
    <ImageDataContext.Provider value={state}>
      <ImageDataDispatchContext.Provider value={dispatch}>
        {children}
      </ImageDataDispatchContext.Provider>
    </ImageDataContext.Provider>
  );
};

const useImageDataState = () => {
  const context = React.useContext(ImageDataContext);
  if (context === undefined) {
    throw new Error(
      "useImageDataState must be used within a ImageDataProvider"
    );
  }
  return context;
};

const useImageDataDispatch = () => {
  const context = React.useContext(ImageDataDispatchContext);
  if (context === undefined) {
    throw new Error(
      "useImageDataDispatch must be used within a ImageDataProvider"
    );
  }
  return context;
};

const useImageData = () => {
  return [useImageDataState(), useImageDataDispatch()];
};

ImageDataProvider.propTypes = {
  children: PropTypes.node,
};

export {
  ImageDataProvider,
  useImageDataState,
  useImageDataDispatch,
  useImageData,
};
