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
import { useReducer, useState, useCallback } from "react";
// import Memo from "./components/Memo";
import CountDisplay from "./components/CountDisplay";
import CountClick from "./components/CountClick";

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

  // const Memo = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  // }

  // useCallbackとは、指定したものだけレンダリングさせるために使うもの。
  // そうしないと、100,200のコンポーネントがある時に、それら不要なコンポーネントが
  // レンダリングされてしまうと、reactのパフォーマンスが落ちてしまう。
  // reactのmemo機能と連携して使用していく。
  // useCallbackの使用方法は、useCallbackをimportし、関数をuseCallbackの()内に納める。
  // 第2引数に条件を指定する、useCallbackがどのステータスが変化した時にレンダリングを行うか指定する。
  // また、第二引数を空[ ]にすることで、AddCount1, AddCount2関数のclick毎の再定義を防ぐことが出来、
  // CountClick コンポーネントのレンダリングを初回のみに減らすことが出来る。
  const AddCount1 = useCallback(() => {
    setCount1((prevCount1) => prevCount1 + 1);
  }, [count1]);
  const AddCount2 = useCallback(() => {
    setCount2((prevCount2) => prevCount2 + 1);
  }, [count2]);

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
          {/* <Memo /> */}
          {/* CountDisplayにpropでテキストの内容のcount1と、ステートのcount1の内容を渡す。 */}
          <CountDisplay name="count1" count={count1} />
          {/* AddCount1関数を渡すために、handleClickという変数にそれを割り当てるため、propで渡す。
          AddCount1関数のテキストとして、AddCount1を表示させておく。
          このコンポーネントを埋め込む際の開始タグと閉じタグの間に何らかの要素を含ませる事ができる。
          その要素（今回はAddCount1）を、"children"と言う変数で扱われる。
          そのため、CountClickの中ではpropとは別で、childrenでアクセスすればAddCount1にアクセス出来る。 */}
          <CountClick handleClick={AddCount1}>AddCount1</CountClick>
          <CountDisplay name="count2" count={count2} />
          <CountClick handleClick={AddCount2}>AddCount2</CountClick>
        </header>
      </div>
    </AppContext.Provider>
  );
}

export default App;
