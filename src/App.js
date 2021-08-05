import "./App.scss";

import Loader from "./Loader/Loader";

function App() {
  return (
    <div className="app">
      <Loader type="spinner" size="30px"  borderWidth="25px" color="lightblue" animationDuration="0.8s"/>
    </div>
  );
}

export default App;
