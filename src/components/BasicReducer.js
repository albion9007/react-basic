// useReducerをimportする。
import React, { useReducer } from "react";

// initialStateで初期値を0に設定する。
const initialState = 0;

// reducer関数を作る。
// 第1引数にcurrentStateで現在のステート、第2引数に実際の受け取るactionを設定。
const reducer = (currentState, action) => {
  // actionに名前が入った文字列を入れる。
  // それをswitch文でコマンドの内容（action）によって切り替える。
  switch (action) {
    // actionの内容をcaseで場合分けする。
    // add_1コマンドがくれば、新しいステートとして、
    // currentStateに+1して返す。
    case "add_1":
      return currentState + 1;
    case "multiple_3":
      return currentState * 3;
    // resetが押されたら、上記で定義したinitialState=0の値が返される。
    case "reset":
      return initialState;
    // defaultで上記のコマンドに該当しないものがきた時、
    // currentStateでそのままの値を保持する形となる。
    default:
      return currentState;
  }
};
const BasicReducer = () => {
  // useReducerに上記で定義したreducer関数と、initialStateを渡すと、
  // countというこのFC内で現在のステートを参照出来る変数（第1引数に入れる）と、dispatchが返される。
  // dispatchは上記のcaseで分けたコマンドの値を入れると、そのコマンドの処理が実行され、countステートが更新される。
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      {/* countを{}で囲い、ブラウザに表示させる。 */}
      <div>Count {count}</div>
      {/* Add +1がクリックされると、dispatchが呼ばれその時にアクションのコマンド名として、
      add_1を引数に指定しているため、reducerが呼ばれた時にcaseのadd_1が呼ばれその処理が実行され値が返される。 */}
      <button onClick={() => dispatch("add_1")}>Add + 1</button>
      <button onClick={() => dispatch("multiple_3")}>Multiple * 3</button>
      <button onClick={() => dispatch("reset")}>Reset</button>
    </div>
  );
};

export default BasicReducer;
