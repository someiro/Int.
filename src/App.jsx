import { Header, Footer, Home, About, Components } from "./pageIndex.jsx";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/about" element={<Components />} />
      </Routes>
      
      <Footer />
    </>
  );
}

export default App;
