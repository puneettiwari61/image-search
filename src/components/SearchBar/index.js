import React from "react";

const SearchBar = ({ handleOnSearch }) => {
  return (
    <div className="container flex justify-center items-center px-4 sm:px-6 lg:px-8">
      <div className="relative my-8">
        <input
          type="text"
          className="h-14 w-96 pr-8 pl-5 rounded z-0 focus:shadow focus:outline-none"
          placeholder="Search anything..."
          onChange={handleOnSearch}
        />
        <div className="absolute top-4 right-3">
          <i className="fa fa-search text-gray-400 z-20 hover:text-gray-500" />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
