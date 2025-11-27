import Date from "./Date";
import Comment from "./Comment";
import { Link } from "react-router-dom";

function Card({image, imageDescription, title, date, count, articleId}) {
  return (
    <Link
    to={`/articles/${articleId}`}
    className="grid grid-cols-[max-content_1fr] border gap-3 p-2 my-4 rounded-md"
    >
      <div>
        <img
        className="w-20 h-20 rounded-lg"
        src={image} alt={imageDescription} />
      </div>
      <div
      className="flex flex-col gap-4"
      >
        <h3
        className="text-lg font-medium"
        >{title}</h3>
        <div
        className="grid grid-cols-[max-content_1fr] gap-1"
        >
          <Date date={date}/>
          <Comment count={count} />
        </div>
      </div>
    </Link>
  )
}

export default Card;
