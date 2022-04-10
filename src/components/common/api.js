import axios from "axios";

export const fetchImages = (page) => {
  const apiurl = `https://api.flickr.com/services/rest/?method=flickr.photos.search&tags=ice&api_key=434f8afdf77c5ff55356355f294e64af&per_page=25&page=${page}&format=json&nojsoncallback=1`;

  return axios.get(apiurl);
};

export const fetchSearchedImages = (
  page,
  debouncedSearchTerm,
  isSearchTermChanged
) => {
  const apiurl = `https://api.flickr.com/services/rest/?method=flickr.photos.search&tags=${debouncedSearchTerm}&api_key=434f8afdf77c5ff55356355f294e64af&per_page=25&page=${
    isSearchTermChanged ? 1 : page
  }&format=json&nojsoncallback=1`;

  return axios.get(apiurl);
};
