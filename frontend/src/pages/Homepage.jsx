import Card from "../components/Card.jsx";
import placeholderImg from "../assets/home.jpg";

function Homepage() {
  return (
    <div
    className="px-4 font-roboto"
    >
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
  )
}

export default Homepage;