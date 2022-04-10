import React, { createRef, useEffect, useState } from "react";
import { fetchImages, fetchSearchedImages } from "../common/api";
import { useImageDataDispatch, useImageDataState } from "../context/images";
import Image from "../Image";
import ImagePlaceholder from "../ImagePlaceholder";

const ImageList = ({ searchTerm, debouncedSearchTerm }) => {
  const [isFetching, setIsFetching] = useState(false);
  const [page, setPage] = useState(1);
  const { defaultPicsArray, searchedPicsArray } = useImageDataState();
  const imageDataDispatch = useImageDataDispatch();
  const lastImageRef = createRef();

  const getDefaultImages = async () => {
    const response = await fetchImages(page);
    imageDataDispatch({
      type: "SET_DEFAULT_PICS_ARRAY",
      payload: {
        defaultPicsArray: [...defaultPicsArray, ...response.data.photos.photo],
      },
    });
    setPage(page + 1);
    setIsFetching(false);
  };

  const getSearchedImages = async (isSearchTermChanged = false) => {
    const response = await fetchSearchedImages(
      page,
      debouncedSearchTerm,
      isSearchTermChanged
    );

    if (isSearchTermChanged) {
      imageDataDispatch({
        type: "SET_SEARCHED_PICS_ARRAY",
        payload: {
          searchedPicsArray: [...response.data.photos.photo],
        },
      });
      setPage(2);
    } else {
      imageDataDispatch({
        type: "UPDATE_SEARCHED_PICS_ARRAY",
        payload: {
          searchedPicsArray: [...response.data.photos.photo],
        },
      });
      setPage(page + 1);
    }
    setIsFetching(false);
  };

  useEffect(() => {
    if (isFetching) {
      searchTerm ? getSearchedImages() : getDefaultImages();
    }
  }, [isFetching]);

  useEffect(() => {
    if (debouncedSearchTerm) {
      getSearchedImages(true);
    } else {
      getDefaultImages();
    }
  }, [debouncedSearchTerm]);

  let options = {
    // root: document.querySelector('#scrollArea'),
    rootMargin: "0px",
    threshold: 1.0,
  };

  let observer = new IntersectionObserver(callback, options);

  useEffect(() => {
    if (lastImageRef.current) {
      observer.observe(lastImageRef.current);
    }
  }, [lastImageRef]);

  function callback([e]) {
    if (e.intersectionRatio == 1) {
      setIsFetching(true);
      // observer.disconnect();
    }
  }
  const currentImages = searchTerm ? searchedPicsArray : defaultPicsArray;
  return (
    <div className="flex flex-wrap justify-center items-center transition-all">
      {currentImages.map((pic, id) => {
        return (
          <Image
            pic={pic}
            id={id}
            page={page}
            key={pic.id + pic.secret + id + page}
            innerRef={
              !isFetching && id === currentImages.length - 1
                ? lastImageRef
                : undefined
            }
          />
        );
      })}
      {isFetching && <ImagePlaceholder />}
    </div>
  );
};

export default ImageList;
