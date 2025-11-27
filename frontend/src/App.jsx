import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "./routes.jsx";
import { BlogProvider } from "./contexts/PostsContext.jsx";

const router = createBrowserRouter(routes);


function App() {
  return (
    <BlogProvider>
      <RouterProvider router={router} />
    </BlogProvider>
  )
}

export default App
