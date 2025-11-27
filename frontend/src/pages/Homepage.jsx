import Card from "../components/Card.jsx";
import NavBar from "../components/NavBar.jsx";
import Search from "../components/Search.jsx";
import { useState, useEffect } from "react";
import mockApi from "../mocks/api.js";

function Homepage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      let data = await mockApi();
      data = JSON.parse(data);
      setPosts(data);
    }
    fetchPosts();
  })

  return (
    <div
    className="p-4 font-roboto"
    >
      <NavBar />
      <h2
      className="text-xl font-semibold text-center m-4"
      >Recent Posts</h2>
      <Search />
      <div>
        {posts.length > 0 &&
        posts.map((post) => (
          <Card
          key={post.id}
          imageUrl={post.imageUrl}
          imageDescription={post.imageDescription}
          title={post.title}
          date={post.date}
          count={post.comments.length}
          articleId={post.id}
          />
        ))
        }
      </div>
      {/* <div>
        <Card
        image={placeholderImg}
        imageDescription="This is a placeholder image"
        title="Sample Card Title"
        date="June 10, 2024"
        count={5}
        articleId={1}
        />
        <Card
        image={placeholderImg}
        imageDescription="This is a placeholder image"
        title="Sample Card Title 2"
        date="June 10, 2024"
        count={5}
        articleId={1}
        />
        <Card
        image={placeholderImg}
        imageDescription="This is a placeholder image"
        title="Sample Card Title 3"
        date="June 10, 2024"
        count={5}
        articleId={1}
        />
      </div> */}
    </div>
  )
}

export default Homepage;