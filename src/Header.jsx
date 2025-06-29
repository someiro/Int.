import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="intHeader">
      <div className="intHeaderContainer">
        <h1>Int.</h1>
        <div className="intHeaderMenu">
          <Link to="/about">
            <button className="intButton">About</button>
          </Link>
          <Link to="/components">
            <button className="intButton">Components</button>
          </Link>
          <Link to="">
            <button className="intOutlinedButton">GitHub</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
