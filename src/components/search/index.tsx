import React from 'react';

const Search: React.FC = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-center items-center bg-white rounded-full p-1 sm:p-1 w-full max-w-xl mx-auto">
      <input
        type="text"
        placeholder="Search for answers..."
        className="w-full sm:w-[400px] md:w-[530px] h-12 sm:h-16 px-5 sm:px-10 text-gray-500 text-sm sm:text-base font-medium rounded-full focus:outline-none"
      />
      <button 
        type="submit" 
        className="h-12 sm:h-16 bg-black text-white font-medium px-8 sm:px-12 rounded-full sm:ml-3 hover:bg-gray-800 transition-colors duration-400"
      >
        Search
      </button>
    </div>
  );
};

export default Search;
