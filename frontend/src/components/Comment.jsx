import { CommentIcon } from "./Svg";

function Comment({ count }) {
  return (
    <div
    className="grid grid-cols-[max-content_1fr] items-center"
    >
      <CommentIcon />
      <span>{count}</span>
    </div>
  )
}

export default Comment;