import { useState, useEffect, createContext } from "react";
import mockApi from "../mocks/api.js";

const PostsContext = createContext([]);

function BlogProvider({ children }) {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchPosts() {
      try{
        setLoading(true)
        let data = await mockApi();
        data = JSON.parse(data);
        setPosts(data);
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