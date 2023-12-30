
import Home from "./pages/Home";
import {About, Blog, Footer, Skill, Header,Hero} from "./Components"
import { Routes, Route } from "react-router-dom";

import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Header />
     z
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Skill" element={<Skill/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/contact" element={<Contact/>}/>

      </Routes>

      <Footer />
    </>
  );
}

export default App;
