import React from "react";

const ImagePlaceholder = () =>
  new Array(25).fill("*").map((value, id) => {
    return (
      <div
        key={id}
        className="bg-white rounded-lg shadow-lg p-1 m-4 w-64 h-64 cursor-pointer transform transition duration-500 hover:scale-110"
      >
        <div className="rounded-t-lg w-full h-full animate-pulse bg-slate-600" />
      </div>
    );
  });

export default ImagePlaceholder;
