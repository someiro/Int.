import { Header, Footer, Home, About, Components } from "./pageIndex.jsx";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />

      <div className="intContainer">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/components" element={<Components />} />
      </Routes>

      </div>

      <Footer />
    </>
  );
}

export default App;
