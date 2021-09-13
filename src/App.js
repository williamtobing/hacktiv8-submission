import { useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import sal from "sal.js";

import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Portfolio from "./components/Portfolio/Portfolio";
import Blog from "./components/Blog/Blog";
import Team from "./components/Team/Team";
import Contact from "./components/Contact/Contact";

function App() {
  useEffect(() => {
    sal();
  }, []);

  return (
    <Router>
      <Navbar />
      <Route path="/" render={Home} exact />
      <Route path="/about" component={About} />
      <Route path="/portfolio" component={Portfolio} />
      <Route path="/blog" component={Blog} />
      <Route path="/team" component={Team} />
      <Route path="/contact" component={Contact} />
    </Router>
  );
}

export default App;
