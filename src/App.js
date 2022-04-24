// import logo from "./logo.svg";
import cnn from "./CNN.png";

import "./App.css";

function App() {
  const divStyle = {
    width: "100%",
    height: "100%",
  };
  return (
    <div className="App">
      {/* <header className="App-header">
        <p>bitch</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <img src={cnn} className="" alt="logo" style={divStyle} />
    </div>
  );
}

export default App;
