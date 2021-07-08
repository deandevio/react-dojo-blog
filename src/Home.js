import { useState } from "react";

const Home = () => {
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
    </div>
  );
};

export default Home;
