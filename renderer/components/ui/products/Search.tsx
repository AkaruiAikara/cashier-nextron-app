import { BiSearchAlt } from "react-icons/bi";
import { GoSettings } from "react-icons/go";

const Search = () => {
  return (
    <div className="flex flex-row gap-2">
      <div className="flex flex-row gap-2 bg-white rounded-lg px-4 py-2 hover:(bg-gray-200) transition-colors duration-200">
        <BiSearchAlt className="w-6 h-6 text-gray-500" />
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search"
          className="bg-transparent outline-none border-none w-full text-gray-500"
        />
      </div>
      <button className="flex items-center justify-center bg-white rounded-lg w-12 hover:(bg-gray-200) transition-colors duration-200">
        <GoSettings className="text-gray-500" size={16} />
      </button>
    </div>
  );
};

export default Search;
