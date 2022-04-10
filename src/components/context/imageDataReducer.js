const ImageDataReducer = (state, { type, payload }) => {
  switch (type) {
    case "SET_DEFAULT_PICS_ARRAY": {
      return {
        searchedPicsArray: [],
        defaultPicsArray: payload.defaultPicsArray,
        isSearchTermChanged: false,
      };
    }
    case "UPDATE_DEFAULT_PICS_ARRAY": {
      return {
        searchedPicsArray: [],
        defaultPicsArray: [
          ...state.defaultPicsArray,
          ...payload.defaultPicsArray,
        ],
        isSearchTermChanged: false,
      };
    }

    case "SET_SEARCHED_PICS_ARRAY": {
      return {
        searchedPicsArray: payload.searchedPicsArray,
        defaultPicsArray: [],
        isSearchTermChanged: true,
      };
    }

    case "UPDATE_SEARCHED_PICS_ARRAY": {
      return {
        searchedPicsArray: [
          ...state.searchedPicsArray,
          ...payload.searchedPicsArray,
        ],
        defaultPicsArray: [],
        isSearchTermChanged: false,
      };
    }
    default: {
      throw new Error(`Unhandled action type: ${type}`);
    }
  }
};

export default ImageDataReducer;
