import Navbar from "./Navbar";
import Home from "./Home";

// Need to implement react router
export function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
      </div>
    </div>
  );
}
