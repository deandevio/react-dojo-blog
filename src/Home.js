import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState([
    {
      title: "My new website",
      body: "lorem ipsum ...",
      author: "dean",
      id: 1,
    },
    {
      title: "My new website",
      body: "lorem ipsum ...",
      author: "yarin",
      id: 2,
    },
    {
      title: "My new website",
      body: "lorem ipsum ...",
      author: "dean",
      id: 3,
    },
  ]);

  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  };

  return (
    <div className="home">
      <BlogList blogs={blogs} title="All blogs!" handleDelete={handleDelete} />
    </div>
  );
};

export default Home;
