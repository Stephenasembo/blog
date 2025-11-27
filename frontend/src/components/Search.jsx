import { SearchIcon } from "./Svg";
import Input from "./Input";
import { useState } from "react";

function Search() {
  const [value, setValue] = useState("");

  return (
    <div
    className="flex gap-1 border rounded-xl p-2 items-center w-full md:w-[66%] lg:w-[50%] xl:w-[33%] mx-auto"
    >
      <SearchIcon />
      <Input
      type="text"
      placeholder="Search posts..."
      value={value}
      setValue={setValue}
      className="flex-1 px-3 py-1 focus:outline-none focus:ring-2 focus:ring-gray-700 rounded-md"
      />
    </div>
  )
}

export default Search;