import "./App.css";
import Header from "./Components/Header";
import Data from "./Components/Data";
import BlogPosts from "./Components/BlogPosts";
import SkeletonHeader from "./Components/Skeleton/SkeletonHeader";
import {useEffect, useState} from "react";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer); // Cleanup the timer
  }, []);
  return (
    <>
      <div className="App">
        {loading ? <SkeletonHeader /> : <Header />}
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
