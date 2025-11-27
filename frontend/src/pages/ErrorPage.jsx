import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <div className="h-screen relative">
      <div className="absolute top-[10%] left-[10%] translate-y-[30%]">
        <h1
        className="text-9xl mb-4"
        >404</h1>
        <p className="m-2 text-xl mb-4">
          It looks like this page doesn't exist
        </p>
        <Link to="/"
        className="border text-lg p-2 m-2 rounded-lg"
        >
          Back To Home Page
        </Link>
      </div>
    </div>
  )
}

export default ErrorPage;