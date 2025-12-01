import { SearchIcon } from "./Svg";
import Input from "./Input";
import { useRef } from "react";

function Search({onSearch, query, setQuery}) {

  const inputRef = useRef(null)

  function handleSubmit(e) {
    e.preventDefault();
    if(query.trim !== '') {
      onSearch(query);
      inputRef.current.blur();
    }
  }

  return (
    <div
    className="flex gap-1 border rounded-xl p-2 items-center w-full md:w-[66%] lg:w-[50%] xl:w-[33%] mx-auto"
    >
      <SearchIcon />
      <form
      action="" onSubmit={handleSubmit}
      className="w-full"
      >
        <Input
        type="search"
        placeholder="Search posts..."
        value={query}
        setValue={setQuery}
        className="flex-1 px-3 py-1 focus:outline-none focus:ring-2 focus:ring-gray-700 rounded-md w-full"
        ref={inputRef}
        />
      </form>
    </div>
  )
}

export default Search;