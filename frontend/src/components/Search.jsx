import { SearchIcon } from "./Svg";
import Input from "./Input";
import { useRef } from "react";

function Search({onSearch, query, setQuery}) {

  const inputRef = useRef(null)

  function handleEnterKey(e) {
    if(e.key === 'Enter' && query.trim !== '') {
      onSearch(query);
      inputRef.current.blur();
    }
  }

  return (
    <div
    className="flex gap-1 border rounded-xl p-2 items-center w-full md:w-[66%] lg:w-[50%] xl:w-[33%] mx-auto"
    >
      <SearchIcon />
      <Input
      type="text"
      placeholder="Search posts..."
      value={query}
      setValue={setQuery}
      onKeyDown={handleEnterKey}
      className="flex-1 px-3 py-1 focus:outline-none focus:ring-2 focus:ring-gray-700 rounded-md"
      ref={inputRef}
      />
    </div>
  )
}

export default Search;