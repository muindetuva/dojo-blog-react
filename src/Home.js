import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState([
    {
      title: "My new website",
      body: "Lorem Ipsum...",
      author: "mario",
      id: 1,
    },
    {
      title: "Welcome to the party",
      body: "Lorem Ipsum...",
      author: "yoshi",
      id: 2,
    },
    {
      title: "Top tobs",
      body: "Lorem Ipsum...",
      author: "luigi",
      id: 3,
    },
  ]);

  return (
    <div className="home">
      {/* Use props to pass data */}
      <BlogList blogs={blogs} title="All blogs!" />
    </div>
  );
};

export default Home;
