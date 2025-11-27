import { BackIcon } from "../components/Svg";
import { Link, useParams } from "react-router-dom";
import { useContext } from "react";
import PostsContext from "../contexts/PostsContext.jsx";

function Article() {
  const { posts } = useContext(PostsContext);
  const { articleId } = useParams();

  const post = posts.find((post) => post.id === articleId)

  return (
    <div
    className="p-4"
    >
      <div
      className="my-2"
      >
        <Link to="/"><BackIcon /></Link>
      </div>
      <div>
        <img
        className="rounded-lg"
        src={post.imageUrl} alt="Article Image" />
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