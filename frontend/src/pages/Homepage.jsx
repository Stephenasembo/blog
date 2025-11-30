import { useContext } from "react";
import Card from "../components/Card.jsx";
import NavBar from "../components/NavBar.jsx";
import Search from "../components/Search.jsx";
import { PostsContext } from "../contexts/PostsContext.jsx";

function Homepage() {
  const { posts, loading, error } = useContext(PostsContext)

  if(loading) return <p className="text-center mt-4">Loading...</p>;
  if(error) return <p className="text-red-500">An error occured while fetching posts.</p>;
  if(posts.length === 0) return <p className="text-center mt-4">Posts not found.</p>;

  return (
    <div
    className="p-4 font-roboto"
    >
      <NavBar />
      <h2
      className="text-xl font-semibold text-center m-4"
      >Recent Posts</h2>
      <Search />
      <div
      className="md:grid md:grid-cols-2 md:gap-6 items-center md:mt-6 lg:grid-cols-3 2xl:justify-items-center"
      >
        {posts.length > 0 &&
        posts.map((post) => (
          <Card
          key={post._id}
          imageUrl={post.imageUrl}
          imageDescription="Image alt text"
          title={post.title}
          date={post._createdAt}
          count={0}
          articleId={post._id}
          />
        ))
        }
      </div>
    </div>
  )
}

export default Homepage;