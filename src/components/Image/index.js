import React from "react";
import { Link, useLocation } from "react-router-dom";

const Image = ({ pic, id, innerRef, page }) => {
  let location = useLocation();

  return (
    <div
      className="bg-white rounded-lg shadow-lg p-1 m-4 w-64 h-64 cursor-pointer transform transition-all duration-500 hover:scale-110"
      ref={innerRef}
    >
      <Link to={`/img/${pic.id}`} state={{ backgroundLocation: location }}>
        <img
          src={`https://live.staticflickr.com/${pic.server}/${pic.id}_${pic.secret}_z.jpg`}
          alt={pic.title}
          className="rounded-t-lg w-full h-full transition-all"
        />
      </Link>
    </div>
  );
};
export default Image;
