// UseEffectを使う時、コンポーネントが読み込まれた初回の1回だけ何か処理を実行したい時、
// あるステートが変化した時だけある処理を実行したい時などに使われる。
// 例えばAPIのバックエンドで連携している時、
// コンポーネントを最初立ち上げた時だけあるデータを一括で取得するなど。
import React, { useState, useEffect } from "react";

const BasicUseEffect = () => {
  const [count, setCount] = useState(0);
  const [item, setItem] = useState("");

  // useEffectは各レンダリングが走った後に実行されるもの。
  // つまり下記のreturn内の処理が実行された後に、実行される。
  useEffect(() => {
    console.log("useEffect invoked");
    // 最初の1回だけuseEffectの処理を行う。例えばバックエンドのAPIから、最初立ち上げた時だけデータを一括で取得したい時など。
    // 第2引数に[]を指定すると、最初のレンダリング時の1回だけ実行される。
    // また、反応させたいステートを第2引数にの名前を指定すると、そこだけ反応する様になる。
  }, [count]);

  return (
    <div>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Click {count}
      </button>
      <input
        type="text"
        value={item}
        onChange={(evt) => setItem(evt.target.value)}
      />
    </div>
  );
};

export default BasicUseEffect;
