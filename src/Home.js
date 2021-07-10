import { useState } from "react";

const Home = () => {
<<<<<<< HEAD
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
      author: "niv",
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
=======
  const [name, setName] = useState("Dean");
  const [age, setAge] = useState(25);

  const handleClick = () => {
    setName("nos");
    setAge(31);
  };

  return (
    <div className="home">
      <h2>Homepage</h2>
      <p>
        {name} is {age} years old
      </p>
      <button onClick={handleClick}>click</button>
>>>>>>> 3f64ea8e18827e6f2d3383f96fa230d8ef925653
    </div>
  );
};

export default Home;
