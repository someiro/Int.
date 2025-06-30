import { About, Components, SidebarButtons } from "./pageIndex.jsx";
import { useLocation } from "react-router-dom";

function Detail() {
  const location = useLocation().pathname;

  return (
    <div className="intSidebarStackContainer">
      <div className="intSidebarView">
        <SidebarButtons location={location} />
      </div>
      <div className="intStackView">
        {location === "/about" ? (
          <About />
        ) : location === "/components" ? (
          <Components />
        ) : null}
      </div>
    </div>
  );
}

export default Detail;
