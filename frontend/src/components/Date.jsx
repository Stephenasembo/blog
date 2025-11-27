import { DateIcon } from "./Svg";

function Date({ date }) {
  return (
    <div
    className="grid grid-cols-[max-content_1fr] items-center gap-1"
    >
      <DateIcon />
      <span>{date}</span>
    </div>
  )
}

export default Date;