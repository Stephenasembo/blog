import { BackIcon } from "../components/Svg";
import { Link, useParams } from "react-router-dom";
import { useContext } from "react";
import { PostsContext } from "../contexts/PostsContext.jsx";
import { PortableText } from '@portabletext/react';

function Article() {
  const { posts, loading, error } = useContext(PostsContext);
  const { articleId } = useParams();

  if(loading) return <p className="text-center">Loading...</p>;
  if(error) return <p className="text-red-500">An error occured while fetching post.</p>;
  if(posts.length === 0) return <p className="text-center">Posts not found.</p>;

  const post = posts.find((post) => post._id === articleId)

  return (
    <div
    className="py-4"
    >
      <div
      className="mx-2"
      >
        <button>
          <Link to="/"><BackIcon /></Link>
        </button>
      </div>
      <div
      className="md:px-4"
      >
        <div
        className="w-[300px] h-[225px] md:w-[600px] md:h-[450px] lg:w-[800px] lg:h-[600px]
        mx-auto my-2"
        >
          <img
          className="rounded-lg object-cover w-full h-full"
          src={post.imageUrl} alt="Article Image" />
        </div>
        <div className="m-4">
          <h1
          className="text-xl font-bold my-4 text-center"
          >{post.title}</h1>
          <p className="prose white-space-pre-line">
            {Array.isArray(post.body) && <PortableText value={post.body} />}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Article;