import React, { useEffect, useState } from "react";
import { Dialog } from "@reach/dialog";
import "@reach/dialog/styles.css";
import { useNavigate, useParams } from "react-router-dom";
import { useImageDataState } from "../context/images";


const DisplayImage = () => {
  const { defaultPicsArray, searchedPicsArray } = useImageDataState();
  const [currentPic, setCurrentPic] = useState();

  let navigate = useNavigate();
  let { id } = useParams();

  useEffect(() => {
    if (defaultPicsArray.length) {
      setCurrentPic(defaultPicsArray.find((pic) => pic.id == id));
    } else {
      setCurrentPic(searchedPicsArray.find((pic) => pic.id == id));
    }
  }, []);

  const onDismiss = () => {
    navigate(-1);
  };

  if (!currentPic) {
    return <h1>Loading..</h1>;
  }

  return (
    <Dialog
      aria-labelledby="label"
      onDismiss={onDismiss}
      style={{
        backgroundColor: "transparent",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "60vw",
      }}
    >
      <img
        src={`https://live.staticflickr.com/${currentPic.server}/${currentPic.id}_${currentPic.secret}_z.jpg`}
        alt={currentPic.title}
        className="rounded-t-lg w-full h-full transition-all"
      />
    </Dialog>
  );
};

export default DisplayImage;
