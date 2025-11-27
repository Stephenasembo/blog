import Homepage from "./pages/Homepage";
import Article from "./pages/Article";
import ErrorPage from "./pages/ErrorPage";

const routes = [
  {
    path: "/",
    element: <Homepage />,
    errorElement: <ErrorPage />
  },
  {
    path: "articles/:articleId",
    element: <Article />,
  },
]

export default routes;