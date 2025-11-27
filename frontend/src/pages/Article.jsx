import { BackIcon } from "../components/Svg";

function Article({image, post}) {
  return (
    <div
    className="p-4"
    >
      <div
      className="my-2"
      >
        <BackIcon />
      </div>
      <div>
        <img
        className="rounded-lg"
        src={image} alt="Article Image" />
        <div className="my-4">
          <h1
          className="text-xl font-bold my-4"
          >{post.title}</h1>
          <p>{post.content}</p>
        </div>
      </div>
    </div>
  )
}

export default Article;