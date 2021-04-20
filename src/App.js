import logo from "./logo.svg";
import "./App.css";
// import Basic2 from "./components/Basic2";
// import BasicUseEffect from "./components/BasicUseEffect";
// import TimerContainer from "./components/TimerContainer";
// import ApiFetch from "./components/ApiFetch";
// import ApiFetch2 from "./components/ApiFetch2";
import AppContext from "./contexts/AppContext";
// 孫コンポーネントのCを呼び出すために、まず子コンポーネントのBをimportする。
import B from "./components/B";
import BasicReducer from "./components/BasicReducer";

function App() {
  return (
    // AppContextの使い方
    // Providerで要素全体を囲い、Providerの属性でvalueを指定する。
    // そうすると、Providerの中に埋め込まれているコンポーネントで
    // Providerで指定されたvalueを利用できる。
    <AppContext.Provider value={"hello"}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {/* <Basic2 /> */}
          {/* <BasicUseEffect /> */}
          {/* <TimerContainer /> */}
          {/* <ApiFetch /> */}
          {/* <ApiFetch2 /> */}
          {/* <B /> */}
          <BasicReducer />
        </header>
      </div>
    </AppContext.Provider>
  );
}

export default App;
