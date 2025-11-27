import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "./routes.jsx";
import { useState } from "react";
import PostsContext from "./contexts/PostsContext.jsx";

const router = createBrowserRouter(routes);


function App() {
  const [posts, setPosts] = useState([]);

  return (
    <PostsContext value={{ posts, setPosts }}>
      <RouterProvider router={router} />
    </PostsContext>
  )
}

export default App
