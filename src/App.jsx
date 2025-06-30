import { Header, Footer, Home, Detail } from "./pageIndex.jsx";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />

      <div className="intContainer">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Detail />} />
          <Route path="/components" element={<Detail />} />
        </Routes>
      </div>

      <Footer />
    </>
  );
}

export default App;
