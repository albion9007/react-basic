import logo from "./logo.svg";
import "./App.css";
// import Basic2 from "./components/Basic2";
// import BasicUseEffect from "./components/BasicUseEffect";
// import TimerContainer from "./components/TimerContainer";
// import ApiFetch from "./components/ApiFetch";
// import ApiFetch2 from "./components/ApiFetch2";
import AppContext from "./contexts/AppContext";
// import CompB from "./components/CompB";
// 孫コンポーネントのCを呼び出すために、まず子コンポーネントのBをimportする。
// import B from "./components/B";
// import BasicReducer from "./components/BasicReducer";

// 親コンポーネントでinitialStateとreducerが使える様にするため、
// useReducerをimportし、initialStateとreducerを定義する。
import { useReducer } from "react";
import Memo from "./components/Memo";

const initialState = 0;

const reducer = (currentState, action) => {
  switch (action) {
    case "add_1":
      return currentState + 1;
    case "multiple_3":
      return currentState * 3;
    case "reset":
      return initialState;
    default:
      return currentState;
  }
};

function App() {
  // Appコンポーネントの中だけで、reducerを使った状態遷移を出来るようにするため、
  // useReducerでcountステートと、dispatchを作っている部分をAppコンポーネントの中に記述。
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    // AppContextの使い方
    // Providerで要素全体を囲い、Providerの属性でvalueを指定する。
    // そうすると、Providerの中に埋め込まれているコンポーネントで
    // Providerで指定されたvalueを利用できる。
    // <AppContext.Provider value={"hello"}>
    <AppContext.Provider
      // 共有する値が複数ある場合、　{{}}の中にそれぞれの値を識別するための変数名を付ける。
      // 今回はcountステートと、dispatchの値を孫コンポーネントにProviderを使って渡すために、
      // それぞれ変数名を付ける。変数名の実態を右に記述する。
      value={{ countProvided: count, dispatchProvided: dispatch }}
    >
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {/* <Basic2 /> */}
          {/* <BasicUseEffect /> */}
          {/* <TimerContainer /> */}
          {/* <ApiFetch /> */}
          {/* <ApiFetch2 /> */}
          {/* <B /> */}
          {/* <BasicReducer /> */}
          {/* 親のコンポーネントでグローバルにしていくcountステートを表示させる様にしていく。 */}
          {/* Count {count}
          <CompB /> */}
          <Memo />
        </header>
      </div>
    </AppContext.Provider>
  );
}

export default App;
