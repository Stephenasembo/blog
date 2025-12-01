import DateComponent from "./Date";
import { Link } from "react-router-dom";

function Card({imageUrl, imageDescription, title, date, articleId}) {
  return (
    <Link
    to={`/articles/${articleId}`}
    className="grid grid-cols-[max-content_1fr] border gap-3 p-2 my-4 rounded-md md:m-0 max-w-[450px] 2xl:w-full"
    >
      <div className="self-center">
        <img
        className="w-[100px] h-[75px] md:w-[125px] md:h-[100px] rounded-lg"
        src={imageUrl} alt={imageDescription} />
      </div>
      <div
      className="flex flex-col flex-1 justify-between mb-1"
      >
        <h3
        className="text-lg font-medium"
        >{title}</h3>
        <div
        className="flex w-[95%] xl:pr-8"
        >
          <DateComponent date={date}/>
        </div>
      </div>
    </Link>
  )
}

export default Card;
