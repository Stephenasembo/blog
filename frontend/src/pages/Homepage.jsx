import Card from "../components/Card.jsx";
import placeholderImg from "../assets/home.jpg";
import NavBar from "../components/NavBar.jsx";

function Homepage() {
  return (
    <div
    className="p-4 font-roboto"
    >
      <NavBar />
      <div>
        <Card
        image={placeholderImg}
        imageDescription="This is a placeholder image"
        title="Sample Card Title"
        date="June 10, 2024"
        count={5}
        />
        <Card
        image={placeholderImg}
        imageDescription="This is a placeholder image"
        title="Sample Card Title 2"
        date="June 10, 2024"
        count={5}
        />
        <Card
        image={placeholderImg}
        imageDescription="This is a placeholder image"
        title="Sample Card Title 3"
        date="June 10, 2024"
        count={5}
        />
      </div>
    </div>
  )
}

export default Homepage;