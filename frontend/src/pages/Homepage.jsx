import { useContext, useState } from "react";
import Card from "../components/Card.jsx";
import NavBar from "../components/NavBar.jsx";
import Search from "../components/Search.jsx";
import { PostsContext } from "../contexts/PostsContext.jsx";

function Homepage() {
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [query, setQuery] = useState('');
  const [searchEntry, setSearchEntry] = useState('');
  const { posts, loading, error } = useContext(PostsContext);

  function handleSearch(searchQuery) {
    const filtered = posts.filter((post) => post.title.toLowerCase().includes(searchQuery.toLowerCase()));
    setFilteredPosts(filtered);
    setSearchEntry(searchQuery);
  }

  function resetSearch() {
    setFilteredPosts([]);
    setQuery('');
    setSearchEntry('');
  }

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
      <Search
      onSearch={handleSearch}
      query={query}
      setQuery={setQuery}
      />
      {searchEntry !== '' && filteredPosts.length === 0 ?
        <div className="flex flex-col items-center">
          <p className="my-8">No matching posts for "{searchEntry}". Please check your spelling and try again.</p>
          <button
          className="block w-max mx-auto border text-lg p-2 m-2 rounded-lg cursor-pointer"
          onClick={resetSearch}
          >
              Show all posts
          </button>
        </div>:
        <div>
          {filteredPosts.length > 0 && searchEntry !== '' ?
          <div className="flex flex-col gap-2">
            <div
            className="md:grid md:grid-cols-2 md:gap-6 items-center md:mt-6 lg:grid-cols-3 2xl:justify-items-center"
            >
              {filteredPosts.map((post) => (
                <Card
                key={post._id}
                imageUrl={post.imageUrl}
                imageDescription="Image alt text"
                title={post.title}
                date={post._createdAt}
                articleId={post._id}
                />
              ))}
            </div>
            <button
            className="block w-max mx-auto border text-lg p-2 m-2 rounded-lg cursor-pointer"
            onClick={resetSearch}
            >
              Show all posts
            </button>
          </div> :
          posts.length > 0 &&
          <div
          className="md:grid md:grid-cols-2 md:gap-6 items-center md:mt-6 lg:grid-cols-3 2xl:justify-items-center"
          >
            {posts.map((post) => (
              <Card
              key={post._id}
              imageUrl={post.imageUrl}
              imageDescription="Image alt text"
              title={post.title}
              date={post._createdAt}
              articleId={post._id}
              />
            ))}
          </div>
          }
        </div>}
    </div>
  )
}

export default Homepage;