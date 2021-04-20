import React, { useState, useEffect } from "react";

const Timer = () => {
  // constの初期値をuseStateで0に設定。
  const [count, setCount] = useState(0);

  const time = () => {
    setCount((prevCount) => prevCount + 1);
  };

  useEffect(() => {
    // このTimerは1秒毎に呼び出されるので、引数にtimeを指定することで、
    // 上記のtimeを1秒毎に実行する。そのため、countの値が1ずつ増える。
    const interval = setInterval(time, 1000);
    // returnの内容が実行される時、
    // useEffectの機能で、このコンポーネントが破棄された場合、
    // 今回は、TimerContainerに埋め込んだTimerが有効で無くなった場合、
    // つまりfalseになった場合、実行される。
    return () => {
      clearInterval(interval);
      console.log("cleared");
    };
    // Timerを起動させるのは、最初の1回だけなので第2引数に空の[]を付けておく。
  }, []);

  return <div>{count}</div>;
};

export default Timer;
