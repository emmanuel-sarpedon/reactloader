import "./App.scss";

import Loader from "./Loader/Loader";

function App() {
  return (
    <div className="app">
      <div /*spinner*/>
        <Loader
          color="white"
          type="spinner"
          size="20px"
          borderWidth="5px"
          animationDuration="0.8s"
        />
        <span>Spinner</span>
      </div>
      <div /*audio wave*/>
        <Loader
          type="audio-wave"
          size="10px"
          color="white"
          animationDuration="0.8s"
          numberOfItems="3"
        />
        <span>Audio wave</span>
      </div>
      <div /*ellipsis-fall*/>
        <Loader
          type="ellipsis-fall"
          animationDuration="2s"
          color="white"
          numberOfItems="5"
        />
        <span>Ellipsis fall</span>
      </div>
      <div /*ellipsis-run-off*/>
        <Loader
          type="ellipsis-run-off"
          animationDuration="1s"
          color="white"
          numberOfItems="5"
        />
        <span>Ellipsis run off</span>
      </div>
    </div>
  );
}

export default App;
