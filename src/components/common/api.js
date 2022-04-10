import axios from "axios";

export const fetchImages = (page) => {
  const apiurl = `https://api.flickr.com/services/rest/?method=flickr.photos.search&tags=ice&api_key=${process.env.REACT_APP_FLICKR_SECRET_KEY}&per_page=25&page=${page}&format=json&nojsoncallback=1`;

  return axios.get(apiurl);
};

export const fetchSearchedImages = (
  page,
  debouncedSearchTerm,
  isSearchTermChanged
) => {
  const apiurl = `https://api.flickr.com/services/rest/?method=flickr.photos.search&tags=${debouncedSearchTerm}&api_key=${
    process.env.REACT_APP_FLICKR_SECRET_KEY
  }&per_page=25&page=${
    isSearchTermChanged ? 1 : page
  }&format=json&nojsoncallback=1`;

  return axios.get(apiurl);
};
