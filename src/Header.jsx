import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation().pathname;

  return (
    <div className="intHeader">
      <div className="intHeaderContainer">
        <Link className="intRemoveTextDeco" to="/">
          <h1 className="intTextColorBlack">Int.</h1>
        </Link>
        <div className="intHeaderMenu">
          {location !== "/about" && location !== "/components" ? (
            <>
              <Link to="/about">
                <button className="intButton">About Int.</button>
              </Link>
              <Link to="/components">
                <button className="intButton">Components</button>
              </Link>
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Header;
