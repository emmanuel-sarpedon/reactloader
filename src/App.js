import "./App.scss";

import Loader from "./Loader/Loader";

function App() {
  return (
    <div className="app">
      <div>
        <Loader
          type="spinner"
          size="20px"
          borderWidth="2px"
          color="lightgrey"
          animationDuration="0.8s"
        />
        <span>Spinner</span>
      </div>

      <div>
        <Loader
          type="audio-wave"
          size="30px"
          color="lightgrey"
          animationDuration="0.8s"
          numberOfItems="8"
        />
        <span>Audio wave</span>
      </div>

      <div>
        <Loader
          type="ellipsis-fall"
          animationDuration="2s"
          color="lightgrey"
          numberOfItems="5"
        />
        <span>Ellipsis fall</span>
      </div>
    </div>
  );
}

export default App;
