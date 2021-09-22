import { useState } from "react";

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
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
        </div>
      ))}
    </div>
  );
};

export default Home;
