import logo from "./logo.svg";
import "./App.css";
// import Basic2 from "./components/Basic2";
// import BasicUseEffect from "./components/BasicUseEffect";
// import TimerContainer from "./components/TimerContainer";
// import ApiFetch from "./components/ApiFetch";
import ApiFetch2 from "./components/ApiFetch2";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <Basic2 /> */}
        {/* <BasicUseEffect /> */}
        {/* <TimerContainer /> */}
        {/* <ApiFetch /> */}
        <ApiFetch2 />
      </header>
    </div>
  );
}

export default App;
