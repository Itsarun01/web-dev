import "./App.css";
import Header from "./Components/Header";
import Data from "./Components/Data";
import BlogPosts from "./Components/BlogPosts";

function App() {
  return (
    <>
      <div className="App">
        <Header />
        {Data.map((post, index) => {
          return (
            <BlogPosts key={index} title={post.title} content={post.content} />
          );
        })}
      </div>
    </>
  );
}

export default App;
