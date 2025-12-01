import { DateIcon } from "./Svg";

function formatDate(date) {
  const newDate = new Date(date);

  const dateStr = `${newDate.getDate()} ${newDate.toLocaleString("en-US", {month: "short"})} ${newDate.getFullYear()}`

  return dateStr
}

function DateComponent({ date }) {
  return (
    <div
    className="grid grid-cols-[max-content_1fr] items-center gap-1"
    >
      <DateIcon />
      <span>{formatDate(date)}</span>
    </div>
  )
}

export default DateComponent;