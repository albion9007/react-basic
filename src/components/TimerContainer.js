import React, { useState } from "react";
import Timer from "./Timer";

// ボタンを押せばタイマーがリセットされるものを作る
const TimerContainer = () => {
  // useStateで初期値をtrueにしておく。
  const [display, setDisplay] = useState(true);

  return (
    <div>
      {/* ボタンを作り、displayをswitch出来る様にする。
      ボタンが押される度に現在のtrueまたはfalseの逆の値を指定することで、
      真偽値をトグルすることが出来る。 */}
      <button onClick={() => setDisplay(!display)}>Switch Timer</button>
      {/* displayのステータス（trueまたはfalse）でTimerを表示するかどうかを決める。
      falseの場合は表示されなくなる。 */}
      {display && <Timer />}
    </div>
  );
};

export default TimerContainer;
