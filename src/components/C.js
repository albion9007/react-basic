// useContextを使うため、importしておく。
import React, { useContext } from "react";
// AppContextもimportしておく。
import AppContext from "../contexts/AppContext";

const C = () => {
  // ローカル変数のvalueに、App.jsのAppContext.Providerのvalue属性の中身を渡す。
  // それにはuseContextを使い、引数にAppContextを割り当てる。
  // これで孫のCコンポーネントで親のApp.jsの値が使える。
  const value = useContext(AppContext);
  return (
    <div>
      <h3>C</h3>
      {/* useContextを使って、親のAppコンポーネントから直接孫のCに
       "hello"の文字列を渡して、Cのブラウザに表示をさせる。 */}
      {value}
    </div>
  );
};

export default C;
