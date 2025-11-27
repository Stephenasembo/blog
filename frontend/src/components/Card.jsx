import Date from "./Date";
import Comment from "./Comment";

function Card({image, imageDescription, title, date, count}) {
  return (
    <div
    className="grid grid-cols-[max-content_1fr] border gap-3 p-2 my-2"
    >
      <div>
        <img
        className="w-20 h-20"
        src={image} alt={imageDescription} />
      </div>
      <div
      className="flex flex-col gap-4"
      >
        <h2
        className="text-lg font-medium"
        >{title}</h2>
        <div
        className="grid grid-cols-[max-content_1fr] gap-1"
        >
          <Date date={date}/>
          <Comment count={count} />
        </div>
      </div>
    </div>
  )
}

export default Card;
