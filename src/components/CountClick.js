import React from "react";

// propの値を受け取るために、AddCount1関数をhandleClickとして受け取る、またchildrenを受け取る。
const CountClick = ({ handleClick, children }) => {
  // console.logでclickedとchildrenの内容を繋げて表示させる。
  console.log("clicked", children);

  return (
    <div>
      {/* buttonがクリックされた時に、propsで渡されてきたhandleClickの実態を実行する。
      AddCount1とAddCount2の関数のどちらかが渡されてきたかで、内容が変わってくる。
      表示させるボタンの名前をchildrenで受け取った内容を表示させる。 */}
      <button onClick={handleClick}>{children}</button>
    </div>
  );
};

// CountClick内のhandleClickに渡されたAddCount1関数は、
// React.memoだけではレンダリングを防げないため、useCallbackを使う。
// →App.js
export default React.memo(CountClick);
