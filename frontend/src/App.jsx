import Article from "./pages/Article.jsx";
import Homepage from "./pages/Homepage.jsx";
import placeholderImg from "./assets/home.jpg";

function App() {
  return (
    <Article
    image={placeholderImg}
    post={{
      title: "Sample Article Title",
      content: "This is a sample article content used to demonstrate the Article component"
    }}
    />
  )
}

export default App
