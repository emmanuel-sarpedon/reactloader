import "./App.scss";

import Loader from "./Loader/Loader";

function App() {
  return (
    <div className="app">
      <div>
        <Loader
          color="white"
          type="spinner"
          size="20px"
          borderWidth="5px"
          animationDuration="0.8s"
        />
        <span>Spinner</span>
      </div>

      <div>
        <Loader
          type="audio-wave"
          size="10px"
          color="white"
          animationDuration="0.8s"
          numberOfItems="3"
        />
        <span>Audio wave</span>
      </div>

      <div>
        <Loader
          type="ellipsis-fall"
          animationDuration="2s"
          color="white"
          numberOfItems="5"
        />
        <span>Ellipsis fall</span>
      </div>
    </div>
  );
}

export default App;
