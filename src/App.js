import { useEffect } from "react";
import sal from "sal.js";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";

function App() {
  useEffect(() => {
    sal();
  });

  return (
    <>
      <Navbar />
      <Home />
    </>
  );
}

export default App;
