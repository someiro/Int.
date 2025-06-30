import { Link } from "react-router-dom";

function SidebarButtons(props) {
  const location = props.location;

  return (
    <div className="intBtnsContainer">
      <Link to="/about">
        {location === "/about" ? (
          <button className="intButton intWidth100 intAddMarginTop">
            About Int.
          </button>
        ) : (
          <button className="intOutlinedButton intWidth100 intAddMarginTop">
            About Int.
          </button>
        )}
      </Link>
      
      <Link to="/components">
        {location === "/components" ? (
          <button className="intButton intWidth100 intAddMarginTop">
            Components
          </button>
        ) : (
          <button className="intOutlinedButton intWidth100 intAddMarginTop">
            Components
          </button>
        )}
      </Link>  
    </div>
  );
}

export default SidebarButtons;
