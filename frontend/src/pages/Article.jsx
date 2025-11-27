import { BackIcon } from "../components/Svg";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function Article() {
  const [post, setPost] = useState({})
  const {articleId} = useParams();
  console.log(articleId)

  useEffect(() => {
    console.log("Fetching article with ID:", articleId);
    setPost({
      title: "Sample Article Title",
      content: "This is the content of the sample article. It contains information about the topic discussed in the article.",
      imageUrl: "https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    });
  }, [articleId])

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