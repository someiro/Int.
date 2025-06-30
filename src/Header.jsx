import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="intHeader">
      <div className="intHeaderContainer">
        <Link className="intTextDeco" to="/">
          <h1 className="intTextColorBlack">Int.</h1>
        </Link>
        <div className="intHeaderMenu">
          <Link to="/about">
            <button className="intButton">About</button>
          </Link>
          <Link to="/components">
            <button className="intButton">Components</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
