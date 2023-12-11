import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

function Searchbar({ input, handleSearch, searchbarT }) {
  return (
    <div class="relative mr-2 my-2 max-w-[500px]">
      <input
        type="text"
        class="bg-gray-700 border-gray-600 placeholder-gray-400 w-full shadow rounded border p-3 text-white"
        placeholder={searchbarT}
        value={input}
        onChange={(e) => handleSearch(e)}
      />
      <span class="absolute top-3 right-4 text-purple-lighter">
        <AiOutlineSearch size={"20px"} color="rgb(156 163 175)"/>
      </span>
    </div>
  );
}

export default Searchbar;
