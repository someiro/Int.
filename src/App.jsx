import "./Int.css";
import { format } from "@formkit/tempo"

function App() {
  const readable = format(new Date(), "YYYY")
  return (
    <>
      <div className="intHeader">
        <div className="intHeaderContainer">
          <h1>Int.</h1>
          <div className="intHeaderMenu">
            <button className="intButton">About</button>
            <button className="intButton">Components</button>
            <button className="intOutlinedButton">GitHub</button>
          </div>
        </div>
      </div>
      <div className="intContainer intTextCenter">
        <h1 className="intTextVeryLarge intAddMargin">Int.</h1>
        <p className="intTextSmall intAddMargin">Minimum Design System</p>
      </div>
      <div className="intContainer intRemoveBackgroundColor intRemovePadding intTextVerySmall">
        <p className="intTextCenter intAddPadding">Copyright (c) {readable} someiro. All Rights Reserved.</p>
      </div>
    </>
  )
}

export default App;