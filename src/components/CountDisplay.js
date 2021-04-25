import React from "react";

// CountDisplayのpropで渡されたものを受け取る必要があるので、
// nameとcountステートを受け取る。
const CountDisplay = ({ name, count }) => {
  // CountDisplayの処理が通過されたことを表示するために、
  // console.logでdisplayで渡されてきたnameをdisplayに結合してコンソールに表示する。
  console.log(`display ${name}`);
  return (
    <div>
      {/* ブラウザに返すものは、シンプルにステートの値を表示させる */}
      {count}
    </div>
  );
};

// CountDisplayのpropnの値やCountClickのchildrenの値を、
// reactのmemoを使えば不要なレンダリングを防ぐことが出来る。
export default React.memo(CountDisplay);
