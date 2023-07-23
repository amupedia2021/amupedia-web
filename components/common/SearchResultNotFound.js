import React from 'react';

const SearchResultNotFound = ({ query }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <img
        src="/images/404/no-results.png"
        alt="Result Not Found"
        className="w-24 h-24 mb-4" // Increase the size of the image as per your preference
      />
      <h1 className="text-3xl font-bold text-gray-800 mb-2">
        No Results Found
      </h1>
      <p className="text-gray-600 text-lg mb-8">
        Your search for "{query}" did not match any results.
      </p>
    </div>
  );
};

export default SearchResultNotFound;
