import Card from "../components/Card.jsx";
import placeholderImg from "../assets/home.jpg";
import NavBar from "../components/NavBar.jsx";
import Search from "../components/Search.jsx";

function Homepage() {
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
      </div>
    </div>
  )
}

export default Homepage;