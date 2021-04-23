// useMemoは計算時間が長い関数の、無駄な再計算を防ぐためのもの。
import React, { useState, useMemo } from "react";

const Memo = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  // countが1追加されたら、countの値が増加される関数を作る。
  const AddCount1 = () => {
    setCount1((prevCount1) => prevCount1 + 1);
  };
  const AddCount2 = () => {
    setCount2((prevCount2) => prevCount2 + 1);
  };

  // const isOdd = () => {
  //   let i = 0;
  // while文でiを5億回真偽であげるが常時trueになっているため、この場で止まり続ける形になる。
  //   while (i < 500000000) i++;
  // count1の現在の値が奇数かどうか判定する。
  //   return count1 % 2 !== 0;
  // };
  // onClickされた時に、isOdd関数が毎回再評価されている。
  // その評価時にisOdd関数が毎回再計算されている。
  // そのため、5億回なので表示が切り替わるのに時間がかかっている。
  // useMemoの第2引数に、その計算に影響する変数を入れる。
  // その変数が変化した時だけ、この再計算を実行させる。
  // 再計算しない時は計算結果をそのまま返すため、計算時間を最適化出来る。
  const isOdd = useMemo(() => {
    let i = 0;
    while (i < 500000000) i++;
    // count1の現在の値が奇数かどうか判定する。
    return count1 % 2 !== 0;
  }, [count1]);

  return (
    <div>
      {/* count1を増加させるボタン */}
      <button onClick={AddCount1}>Count1: {count1}</button>
      <br />
      {/* 奇数の時に"Odd number"、偶数の時に"Even number"を表示させる。
      if文の省略形で、？の部分がtrueならば式の直後の（左側）処理が行われる。
      逆にfalseならば右側の処理が実行される。 */}
      <span>{isOdd ? "Odd number" : "Even number"}</span>
      <br />
      <button onClick={AddCount2}>Count2: {count2}</button>
    </div>
  );
};

export default Memo;
