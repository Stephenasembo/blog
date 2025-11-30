import { useState, useEffect, createContext } from "react";
import { client } from "../sanity/client.js";

const PostsContext = createContext([]);

function BlogProvider({ children }) {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchPosts() {
      try{
        setLoading(true)
        let data = await client.fetch(`*[_type == 'post']{
          _id,
          title,
          "imageUrl": image.asset -> url,
          _createdAt,
          "content": body[0].children[0].text,
          }`);
        setPosts(data);
        console.log(data);
      } catch(error) {
        console.log(error);
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchPosts();
  }, [])

  return (
    <PostsContext value={{ posts, loading, error }}>
      { children }
    </PostsContext>
  )
}

export { PostsContext, BlogProvider };