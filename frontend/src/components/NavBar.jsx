import { MenuIcon } from "./Svg";

function NavBar() {
  return (
    <div
    className="flex justify-between border-b border-gray-300 pb-1 mb-8"
    >
      <h1
      className="text-2xl font-bold"
      >Stephen</h1>
      <MenuIcon />
    </div>
  )
}

export default NavBar;